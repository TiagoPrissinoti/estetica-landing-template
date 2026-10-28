import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { after, test } from 'node:test'
import { JSDOM } from 'jsdom'
import { createServer } from 'vite'
import React, { act } from 'react'

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/' })
for (const key of ['window', 'document', 'HTMLElement', 'Element', 'Node', 'Event', 'KeyboardEvent']) {
  Object.defineProperty(globalThis, key, { value: dom.window[key], configurable: true })
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true
const { createRoot } = await import('react-dom/client')
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
const { BeforeAfterSlider } = await server.ssrLoadModule('/src/components/ui/BeforeAfterSlider.tsx')
const contacts = await server.ssrLoadModule('/src/lib/contact.ts')
const { siteConfig } = await server.ssrLoadModule('/src/config/site.ts')
const { treatments } = await server.ssrLoadModule('/src/data/treatments.ts')
const { results } = await server.ssrLoadModule('/src/data/results.ts')

after(async () => { await server.close(); dom.window.close() })

async function mountSlider(run) {
  const root = createRoot(document.getElementById('root'))
  await act(async () => root.render(React.createElement(BeforeAfterSlider, { ...results[0] })))
  const slider = document.querySelector('[role="slider"]')
  const viewport = document.querySelector('.comparison-viewport')
  const captured = new Set()
  viewport.getBoundingClientRect = () => ({ left: 20, width: 400 })
  viewport.setPointerCapture = id => captured.add(id)
  viewport.hasPointerCapture = id => captured.has(id)
  viewport.releasePointerCapture = id => captured.delete(id)
  const value = () => Number(slider.getAttribute('aria-valuenow'))
  const key = async (keyValue, shiftKey = false) => act(async () => slider.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: keyValue, shiftKey, bubbles: true, cancelable: true })))
  const pointer = async (type, x, options = {}) => {
    const event = new dom.window.Event(type, { bubbles: true, cancelable: true })
    Object.assign(event, { clientX: x, pointerId: 1, pointerType: 'mouse', isPrimary: true, button: 0 }, options)
    await act(async () => viewport.dispatchEvent(event))
  }
  try { await run({ slider, viewport, captured, value, key, pointer }) }
  finally { await act(async () => root.unmount()) }
}

test('slider starts at 50%, has accessible labels and supports keyboard limits', async () => {
  await mountSlider(async ({ slider, value, key }) => {
    assert.equal(value(), 50)
    assert.match(slider.getAttribute('aria-label'), /Harmonização Facial/)
    assert.equal(document.querySelectorAll('.comparison-image[draggable="false"]').length, 2)
    assert.equal(slider.getAttribute('aria-orientation'), 'horizontal')
    await key('ArrowRight'); assert.equal(value(), 52)
    await key('ArrowLeft', true); assert.equal(value(), 42)
    await key('Home'); assert.equal(value(), 0)
    await key('ArrowLeft'); assert.equal(value(), 0)
    await key('End'); assert.equal(value(), 100)
    await key('ArrowRight'); assert.equal(value(), 100)
    await key('PageDown'); assert.equal(value(), 90)
  })
})

test('mouse drag captures the pointer, clamps outside the image and stops on release', async () => {
  await mountSlider(async ({ slider, value, pointer, captured }) => {
    await pointer('pointerdown', 120)
    assert.equal(value(), 25)
    assert.equal(document.activeElement, slider)
    assert.ok(captured.has(1))
    await pointer('pointermove', 340); assert.equal(value(), 80)
    await pointer('pointermove', -500); assert.equal(value(), 0)
    await pointer('pointermove', 1000); assert.equal(value(), 100)
    await pointer('pointerup', 1000); assert.equal(captured.size, 0)
    await pointer('pointermove', 220); assert.equal(value(), 100)
  })
})

test('touch pointer works independently; secondary touches and canceled gestures are ignored', async () => {
  await mountSlider(async ({ value, pointer, captured }) => {
    await pointer('pointerdown', 20, { pointerType: 'touch', isPrimary: false })
    assert.equal(value(), 50)
    await pointer('pointerdown', 100, { pointerType: 'touch' }); assert.equal(value(), 20)
    await pointer('pointermove', 380, { pointerType: 'touch', pointerId: 2 }); assert.equal(value(), 20)
    await pointer('pointermove', 320, { pointerType: 'touch' }); assert.equal(value(), 75)
    await pointer('pointercancel', 320, { pointerType: 'touch' }); assert.equal(captured.size, 0)
    await pointer('pointermove', 20, { pointerType: 'touch' }); assert.equal(value(), 75)
    await pointer('pointerdown', 20, { button: 2 }); assert.equal(value(), 75)
  })
})

test('contact links stay absent in demo mode; configured messages are encoded and unsafe URLs rejected', () => {
  const original = { ...siteConfig }
  try {
    assert.equal(contacts.whatsappUrl(), undefined)
    assert.equal(contacts.instagramUrl(), undefined)
    assert.equal(contacts.mapsEmbedUrl(), undefined)
    siteConfig.whatsapp = '55 (11) 99999-0000'
    const message = 'Olá! Gostaria de saber mais sobre Toxina Botulínica.'
    assert.equal(contacts.whatsappUrl(message), `https://wa.me/5511999990000?text=${encodeURIComponent(message)}`)
    siteConfig.instagram = 'https://www.instagram.com/clinica.exemplo/'
    assert.equal(contacts.instagramUrl(), siteConfig.instagram)
    siteConfig.instagram = 'https://instagram.com.example.org/falso'
    assert.equal(contacts.instagramUrl(), undefined)
    siteConfig.instagram = 'javascript:alert(1)'
    assert.equal(contacts.instagramUrl(), undefined)
    siteConfig.mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=example'
    assert.equal(contacts.mapsEmbedUrl(), siteConfig.mapsEmbedUrl)
    siteConfig.mapsEmbedUrl = 'https://example.org/maps/embed'
    assert.equal(contacts.mapsEmbedUrl(), undefined)
  } finally { Object.assign(siteConfig, original) }
})

test('all local editorial and comparison assets exist and treatment IDs are unique', async () => {
  const images = [...Object.values(siteConfig.images), ...results.flatMap(result => [result.beforeImage, result.afterImage])]
  await Promise.all(images.map(image => access(new URL(`../public${image}`, import.meta.url))))
  assert.equal(new Set(treatments.map(item => item.id)).size, treatments.length)
  assert.equal(new Set(results.map(item => item.id)).size, results.length)
})
