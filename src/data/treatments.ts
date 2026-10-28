export interface Treatment {
  id: string
  name: string
  category: string
  description: string
  details: string
  imageIndex?: number
  image?: string
  imageAlt: string
}

export const treatments: Treatment[] = [
  { id: 'toxina', name: 'Toxina Botulínica', category: 'Expressão & leveza', description: 'Um olhar atento às suas expressões, respeitando a sua identidade.', details: 'Uma possibilidade de cuidado para quem deseja conversar sobre linhas de expressão. Na avaliação individual, um profissional habilitado poderá esclarecer indicações, limitações e cuidados, respeitando suas características.', imageIndex: 0, imageAlt: 'Imagem editorial de testa e sobrancelha, sem realização de procedimento' },
  { id: 'preenchimento', name: 'Preenchimento Facial', category: 'Equilíbrio & naturalidade', description: 'Possibilidades de equilíbrio facial com foco em traços naturais.', details: 'Uma conversa sobre proporções, contornos e o que faz sentido para você. A avaliação profissional é indispensável para definir se essa abordagem é adequada e explicar alternativas e cuidados.', imageIndex: 1, imageAlt: 'Detalhe editorial de lábios e bochecha de uma modelo fictícia' },
  { id: 'bioestimuladores', name: 'Bioestimuladores de Colágeno', category: 'Cuidado & renovação', description: 'Um plano de cuidado pensado para as necessidades da sua pele.', details: 'Uma das possibilidades que podem integrar um plano personalizado de cuidado com a pele. Sua indicação depende de avaliação individual, com orientação sobre expectativas, limitações e acompanhamento.', imageIndex: 2, imageAlt: 'Modelo fictícia tocando delicadamente a lateral do rosto' },
  { id: 'limpeza', name: 'Limpeza de Pele', category: 'Pele & bem-estar', description: 'Uma pausa para cuidar da pele com delicadeza e atenção.', details: 'Um momento de cuidado que considera a rotina e as particularidades da sua pele. Converse com a equipe para conhecer a abordagem e os cuidados que podem ser apropriados para você.', imageIndex: 3, imageAlt: 'Cena ilustrativa de cuidado facial com algodão e luvas' },
  { id: 'microagulhamento', name: 'Microagulhamento', category: 'Textura & cuidado', description: 'Atenção à textura da pele em uma abordagem individualizada.', details: 'Uma opção a ser discutida na avaliação de necessidades da pele. Um profissional habilitado deverá explicar a indicação, as contraindicações e as orientações específicas antes de qualquer decisão.', imageIndex: 4, imageAlt: 'Frasco de sérum e toalha sobre uma superfície de pedra clara' },
  { id: 'corporais', name: 'Tratamentos Corporais', category: 'Corpo & equilíbrio', description: 'Cuidado com o seu corpo, no seu tempo e do seu jeito.', details: 'Diferentes possibilidades de cuidado corporal podem ser consideradas a partir dos seus objetivos e características. O primeiro passo é uma conversa individual para conhecer as opções e suas limitações.', imageIndex: 5, imageAlt: 'Cena ilustrativa de massagem nos ombros em ambiente acolhedor' },
]
