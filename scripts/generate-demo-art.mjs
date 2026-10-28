import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const directory = fileURLToPath(new URL('../public/images/', import.meta.url))
await mkdir(directory, { recursive: true })

const face = `<ellipse cx="295" cy="312" rx="158" ry="210" fill="url(#shape)" transform="rotate(-12 295 312)"/>
  <path d="M299 123c-83 14-127 81-128 169-1 77 30 155 94 190 26 14 57 19 82 1 38-28 62-82 65-144 3-72-23-115-60-138-19-12-29-34-29-56m-42 107c-22-17-45-12-63 1m103 5c19-13 38-11 52 1m-84-8-17 89 27 11m-47 40c24 15 47 16 69-1m-87 102-12 94m82-96 25 92" fill="none" stroke="url(#line)" stroke-width="3" stroke-linecap="round"/>
  <path d="M194 243c-18 32-24 67-12 100m196-91c14 42 11 85-2 120M240 389c20 31 48 46 80 43" fill="none" stroke="url(#line)" stroke-width="1" opacity=".5"/>
  <ellipse cx="297" cy="312" rx="205" ry="259" fill="none" stroke="url(#line)" stroke-width=".7" opacity=".35" transform="rotate(-12 297 312)"/>`

const skin = `<circle cx="303" cy="316" r="197" fill="url(#shape)"/>
  ${Array.from({ length: 10 }, (_, i) => `<circle cx="303" cy="316" r="${58 + i * 16}" fill="none" stroke="url(#line)" stroke-width=".7" opacity="${0.25 + i * 0.04}"/>`).join('')}
  ${Array.from({ length: 24 }, (_, i) => { const angle = i * 2.39996; const r = 27 * Math.sqrt(i); return `<circle cx="${303 + Math.cos(angle) * r}" cy="${316 + Math.sin(angle) * r}" r="${4 + i % 5}" fill="none" stroke="url(#line)" stroke-width="1.1" opacity=".55"/>` }).join('')}
  <path d="M78 400c82 111 153 153 256 127 70-18 124-72 174-171M90 194c101-87 203-102 318-13" fill="none" stroke="url(#line)" stroke-width="1" opacity=".5"/>`

const body = `<ellipse cx="300" cy="323" rx="176" ry="245" fill="url(#shape)" transform="rotate(18 300 323)"/>
  <path d="M275 103c-20 63-17 86-2 119 16 33 17 49 6 77-20 50-56 82-58 127-1 58 20 103 54 147M338 106c-26 59-15 92 0 120 18 34 17 59 3 86-22 43-46 63-48 108-2 61 18 112 45 151" fill="none" stroke="url(#line)" stroke-width="3" stroke-linecap="round"/>
  ${Array.from({ length: 6 }, (_, i) => `<path d="M${204 - i * 13} 144c-29 68 7 111-8 167-15 56-67 93-58 157 5 40 21 63 45 91" transform="translate(${i * 38} ${i * 5})" fill="none" stroke="url(#line)" stroke-width=".7" opacity=".28"/>`).join('')}`

for (const [kind, drawing] of [['facial', face], ['skin', skin], ['body', body]]) {
  for (const state of ['before', 'after']) {
    const warm = state === 'after'
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="680" viewBox="0 0 600 680">
      <defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="${warm ? '#e8dcc9' : '#e8e1d7'}"/><stop offset="1" stop-color="${warm ? '#d3ba95' : '#d5c8b6'}"/></linearGradient>
      <radialGradient id="shape"><stop stop-color="${warm ? '#e5c8a7' : '#dbccbb'}"/><stop offset="1" stop-color="${warm ? '#bd9673' : '#b9a590'}" stop-opacity=".4"/></radialGradient>
      <linearGradient id="line" x2="1" y2="1"><stop stop-color="${warm ? '#8b6037' : '#8c7b69'}"/><stop offset="1" stop-color="${warm ? '#f7eedc' : '#eee6d9'}"/></linearGradient></defs>
      <rect width="600" height="680" fill="url(#bg)"/><circle cx="505" cy="89" r="210" fill="#fffaf2" opacity=".18"/>
      <path d="M35 85h530M35 595h530" stroke="#fff8ec" stroke-width=".8" opacity=".45"/>
      ${drawing}<circle cx="300" cy="603" r="3" fill="${warm ? '#8b6037' : '#8c7b69'}" opacity=".6"/>
    </svg>`
    await writeFile(`${directory}/demo-${kind}-${state}.svg`, svg)
  }
}
console.log('Six illustrative comparison assets generated.')
