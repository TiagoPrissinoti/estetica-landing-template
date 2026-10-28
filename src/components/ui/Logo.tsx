import { siteConfig } from '@/config/site'

export function Logo({ light = false }: { light?: boolean }) {
  return <a href="#inicio" aria-label={`${siteConfig.name} — início`} className={`brand ${light ? 'brand-light' : ''}`}>
    <svg viewBox="0 0 44 48" fill="none" aria-hidden="true"><path d="M5 42 22 5l17 37M12 29h20M8 42h28M22 5v37" stroke="currentColor" strokeWidth="1.2" /><ellipse cx="22" cy="25" rx="18" ry="20" stroke="currentColor" strokeWidth=".65" /></svg>
    <span><span className="brand-name">{siteConfig.name}</span><span className="brand-tagline">{siteConfig.tagline}</span></span>
  </a>
}
