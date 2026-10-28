import { siteConfig } from '@/config/site'

export function TreatmentImage({ index = 0, src, alt, eager = false }: { index?: number; src?: string; alt: string; eager?: boolean }) {
  return <div className={`treatment-image ${src ? 'treatment-image-single' : ''}`}><img src={src || siteConfig.images.treatments} alt={alt} loading={eager ? 'eager' : 'lazy'} width={src ? 800 : 1800} height={src ? 600 : 900} style={src ? undefined : { left: `${-(index % 3) * 100}%`, top: `${-Math.floor(index / 3) * 100}%` }} /><span className="editorial-label">Imagem ilustrativa</span></div>
}
