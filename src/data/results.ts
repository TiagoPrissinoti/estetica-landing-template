export interface Result {
  id: string
  title: string
  subtitle: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

// Diagramas abstratos criados para este projeto. Substitua os dois caminhos por
// imagens autorizadas da mesma pessoa, com enquadramento e dimensões idênticos.
export const results: Result[] = [
  { id: 'facial', title: 'Harmonização Facial', subtitle: 'Equilíbrio em cada detalhe', beforeImage: '/images/demo-facial-before.svg', afterImage: '/images/demo-facial-after.svg', beforeAlt: 'Diagrama abstrato de rosto, estado inicial ilustrativo', afterAlt: 'Mesmo diagrama com outra iluminação e linhas, estado demonstrativo' },
  { id: 'pele', title: 'Tratamento de Pele', subtitle: 'Um novo olhar para o cuidado', beforeImage: '/images/demo-skin-before.svg', afterImage: '/images/demo-skin-after.svg', beforeAlt: 'Textura abstrata de círculos em tons de areia', afterAlt: 'Mesma textura abstrata com variação de cor ilustrativa' },
  { id: 'corporal', title: 'Contorno Corporal', subtitle: 'Cuidado que acompanha você', beforeImage: '/images/demo-body-before.svg', afterImage: '/images/demo-body-after.svg', beforeAlt: 'Estudo abstrato de curvas e linhas, estado inicial', afterAlt: 'Mesmo estudo abstrato com linhas em dourado, demonstração' },
]
