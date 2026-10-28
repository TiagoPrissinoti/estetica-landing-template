export const siteConfig = {
  name: 'Clínica Aura',
  tagline: 'Estética Avançada',
  description: 'Cuidado personalizado, sofisticação e naturalidade. Conheça a experiência da Clínica Aura — um projeto demonstrativo de estética avançada e bem-estar.',
  // Preencha somente com dados reais autorizados. Número em formato internacional, sem + ou espaços.
  whatsapp: '',
  whatsappMessage: 'Olá! Gostaria de agendar uma avaliação na Clínica Aura.',
  instagram: '', // URL completa, por exemplo: https://www.instagram.com/seu.perfil/
  address: '',
  hours: '',
  mapsEmbedUrl: '', // URL HTTPS de incorporação do Google Maps.
  images: {
    hero: '/images/aura-editorial.jpg',
    about: '/images/aura-interior.jpg',
    treatments: '/images/aura-treatments.jpg',
  },
} as const

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const
