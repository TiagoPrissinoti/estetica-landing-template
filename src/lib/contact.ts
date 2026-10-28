import { siteConfig } from '@/config/site'

export function whatsappUrl(message = siteConfig.whatsappMessage as string) {
  const number = siteConfig.whatsapp.replace(/\D/g, '')
  return /^\d{10,15}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : undefined
}

export function instagramUrl() {
  try {
    const url = new URL(siteConfig.instagram)
    return url.protocol === 'https:' && /^(www\.)?instagram\.com$/.test(url.hostname)
      ? url.href
      : undefined
  } catch {
    return undefined
  }
}

export function mapsEmbedUrl() {
  try {
    const url = new URL(siteConfig.mapsEmbedUrl)
    return url.protocol === 'https:' && /^(www\.)?google\.com$/.test(url.hostname) && url.pathname.startsWith('/maps/embed')
      ? url.href
      : undefined
  } catch {
    return undefined
  }
}
