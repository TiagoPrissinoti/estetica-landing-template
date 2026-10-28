# Clínica Aura — Estética Avançada

Landing page comercial demonstrativa construída sobre a base existente de React, TypeScript e Vite. A Clínica Aura é fictícia; imagens, comparações e depoimentos estão identificados como demonstrativos. Não há envio de formulários, armazenamento de dados pessoais ou integrações de agendamento.

## Executar

Use Node.js compatível com Vite 8 (o projeto foi verificado com Node 22.15.0).

```sh
npm ci
npm run dev
```

Se você já tinha um servidor Vite aberto antes da configuração do alias, encerre-o e execute `npm run dev` novamente. O ponto de entrada usa `./App`; o alias `@/` continua configurado no Vite, `tsconfig.json` e `tsconfig.app.json`.

```sh
npm run build   # TypeScript + bundle de produção em dist/
npm run lint    # ESLint
npm test        # 5 testes funcionais em DOM simulado
npm run preview
```

React, Vite, Tailwind e shadcn/ui foram preservados. TypeScript permanece em **~5.9.3**, sem atualização para a versão 7. O jsdom é usado somente nos testes, fora do bundle da aplicação.

## O que está implementado

- Header fixo com transição ao rolar, navegação por âncoras e menu mobile em diálogo acessível.
- Hero editorial, seis tratamentos com modais, resultados interativos, sobre, diferenciais, depoimentos, CTA, contato e rodapé.
- Comparador reutilizável com Pointer Events, mouse, toque, captura do ponteiro, limite de 0–100%, teclado e ARIA.
- Contatos de WhatsApp com mensagem específica por procedimento; Instagram e mapa configuráveis.
- Estados demonstrativos quando contatos, localização e horários não estão preenchidos. Nenhum número ou perfil fictício é usado como destino.
- Motion com entradas discretas e respeito a `prefers-reduced-motion`.
- Imagens locais otimizadas, lazy loading fora da hero, dimensões estáveis, foco visível, skip link e diálogos nativos com Escape, foco contido e retorno ao elemento de origem.
- Metadados SEO e Open Graph básicos, idioma pt-BR e favicon próprio.

## Personalização

### Dados da clínica

Edite **`src/config/site.ts`**:

| Campo | Conteúdo |
| --- | --- |
| `name`, `tagline`, `description` | Identidade institucional |
| `whatsapp` | DDI + DDD + número, por exemplo `5511999990000` (exemplo de formato; não usar como contato real) |
| `whatsappMessage` | Mensagem inicial de agendamento |
| `instagram` | URL HTTPS completa do perfil oficial |
| `address`, `hours` | Endereço e horários reais |
| `mapsEmbedUrl` | URL de incorporação iniciada por `https://www.google.com/maps/embed` |
| `images` | Caminhos das imagens de hero, ambiente e composição editorial dos tratamentos |

Com dados válidos, os botões de contato passam automaticamente a abrir o canal em uma nova aba, com `noopener noreferrer`. Sem dados, abrem uma explicação do modo demonstrativo. O número é normalizado, a mensagem é codificada com `encodeURIComponent` e as URLs de Instagram e mapa são validadas.

A lista de links de navegação também fica em `site.ts`. Textos das seções estão nos respectivos componentes; arrays de diferenciais e valores ficam em `src/data/content.ts`.

### Cores, fontes e marca

- **`src/index.css`**: procure por `Aura design system`. As variáveis `--aura-ivory`, `--aura-sand`, `--aura-gold`, `--aura-gold-dark`, `--aura-ink` e `--aura-graphite` controlam a paleta. O dourado mais escuro é usado em textos pequenos para melhorar o contraste.
- Os tokens shadcn/ui continuam disponíveis. `components.json` preserva o estilo New York, variáveis CSS e aliases. Componentes futuros podem ser adicionados com `npx shadcn add button`.
- Playfair Display e Inter são carregadas pelo Google Fonts com `display=swap`. Existem fallbacks locais; para uso sem dependências externas, hospede as fontes e substitua os links no `index.html` por `@font-face`.
- **`src/components/ui/Logo.tsx`** e **`public/aura-mark.svg`** contêm a marca vetorial fictícia e o favicon.
- Ao trocar a clínica, atualize também os títulos e descrições de **`index.html`**, os textos editoriais das seções e os rótulos que citam Aura. Na publicação, forneça uma URL absoluta para `og:image` e adicione a URL canônica do domínio real.

### Procedimentos

Edite **`src/data/treatments.ts`**. Cada item tipado contém nome, categoria, descrição curta, detalhes e alt. Para usar uma foto individual, preencha `image: '/images/seu-tratamento.jpg'`; `imageIndex` passa a ser opcional. A composição demonstrativa atual contém seis fotografias editoriais geradas por IA, recortadas por CSS. Não contém imagens de resultados clínicos.

Revise conteúdo, indicações e imagens com a clínica e seus profissionais antes de uma publicação real. Não foram incluídos preços, credenciais ou garantias de resultado.

### Comparador antes e depois

Edite **`src/data/results.ts`**. As props públicas são:

```tsx
<BeforeAfterSlider
  beforeImage="/images/antes-autorizado.jpg"
  afterImage="/images/depois-autorizado.jpg"
  beforeAlt="Descrição da imagem antes"
  afterAlt="Descrição da imagem depois"
  title="Nome do tratamento"
/>
```

Use imagens autorizadas da mesma pessoa, com enquadramento e proporções idênticos. O componente sobrepõe as imagens com `clip-path`, sem redimensioná-las durante o arraste. As setas movem 2%; Shift + setas movem 10%; Home/End levam aos extremos. Pointer capture mantém o arraste fora da imagem. `touch-action: pan-y` preserva o scroll vertical; gestos cancelados encerram o arraste. O controle permanece inteiramente visível nos extremos.

As seis imagens SVG atuais são estudos abstratos, **não simulações de resultados de pacientes**. O aviso deve ser mantido enquanto o conteúdo for ilustrativo. Você pode regenerá-las com `node scripts/generate-demo-art.mjs`.

### Depoimentos e localização

- Substitua **`src/data/testimonials.ts`** apenas por depoimentos reais autorizados. Os nomes e textos atuais são fictícios e identificados em cada card; as estrelas são decorativas e não representam notas do Google.
- A localização é um placeholder gráfico próprio. Nenhum endereço real foi inventado. Ao preencher `mapsEmbedUrl`, um iframe com lazy loading toma seu lugar.
- Os arquivos e prompts das imagens estão documentados em **`docs/ASSETS.md`**.

## Estrutura

```text
src/
  components/
    layout/       Header e Footer
    sections/     Hero, Treatments, Results, About, Differentials,
                  Testimonials, CTA e Contact
    ui/           Comparador, cards, diálogos, marca, contatos e animações
  config/         Dados institucionais e navegação
  data/           Procedimentos, comparações, depoimentos e diferenciais
  hooks/          Estado de scroll
  lib/            Links de contato e cn()
  App.tsx
  main.tsx
  index.css
public/images/    Fotografias editoriais e estudos gráficos locais
scripts/          Gerador dos estudos gráficos demonstrativos
tests/            Testes de interação e integridade dos dados
```

## Validação e revisão visual

`npm test` verifica estado inicial e acessibilidade do comparador, teclado e limites, arraste por mouse, eventos de toque, cancelamento, ponteiros secundários, geração de links e existência das imagens locais. Os testes usam jsdom, que **não mede layout nem substitui uma validação em navegador real**.

Foram implementadas composições mobile-first com ajustes em 375, 600, 900, 1200 e 1600px, grades de 1/2/3 colunas, menu mobile, botões confortáveis e hero reorganizada. A revisão visual no Chrome foi tentada, mas o acesso ao aplicativo expirou aguardando autorização; o acesso direto ao navegador estava indisponível. Ainda é necessário revisar visualmente 320, 375, 430, 768, 1024, 1440 e 1920px, testar gestos de toque reais, foco dos diálogos e conferir ausência de overflow horizontal e mensagens no console.

As alterações são locais. Não há commit, push ou publicação automática.
