# Imagens da Clínica Aura

As três imagens editoriais foram geradas para este projeto com a ferramenta integrada **ImageGen**, sem fotografias da clínica citada como referência. São conteúdos ilustrativos de uma clínica fictícia: não mostram pacientes reais, resultados de tratamentos, profissionais identificados ou um espaço físico real da Aura.

Os originais gerados foram preservados no diretório de saída da ferramenta. As cópias consumidas pelo site foram convertidas para JPEG com qualidade 86, sem alterações criativas, e salvas dentro do projeto:

| Arquivo | Uso | Tamanho aproximado |
| --- | --- | --- |
| `public/images/aura-editorial.jpg` | Retrato principal da hero | 159 KiB |
| `public/images/aura-interior.jpg` | Ambiente conceitual na seção Sobre | 288 KiB |
| `public/images/aura-treatments.jpg` | Composição de seis fotos editoriais dos cards | 256 KiB |

As seis imagens `public/images/demo-*-before.svg` e `demo-*-after.svg` são gráficos vetoriais abstratos próprios. Ambos os estados usam a mesma geometria, com variações de cor e iluminação; não representam alterações em uma pessoa. O código-fonte está em `scripts/generate-demo-art.mjs`.

As marcas vetoriais e o ícone de Instagram são desenhos locais em SVG. Os demais ícones usam Lucide React. Playfair Display e Inter são carregadas do Google Fonts; consulte o README para hospedagem local das fontes.

## Prompts finais — ferramenta integrada ImageGen

### Hero

```text
Use case: photorealistic-natural. Create a premium beauty editorial photograph for the hero of Clínica Aura, a fictional Brazilian aesthetics clinic website. Portrait orientation 4:5. Closeup portrait of an adult woman around 30 with brown slicked-back hair, warm olive natural skin with visible fine texture, closed eyes, relaxed expression, one elegant hand lightly resting at jawline, bare shoulders cropped tastefully. Three-quarter profile facing toward the left side of frame. Dramatic but soft warm window lighting from upper left, subtle shadow across face, solid warm taupe-beige studio background. Sophisticated quiet luxury beauty campaign, cinematic 85mm lens, refined warm analog color grading, high-end magazine photography. Face placed centrally, with enough headroom and shoulder at bottom. No text, no typography, no jewelry, no medical equipment, no watermark, no overly airbrushed plastic skin. This is an illustrative fictional model, not a patient, and is not a before and after photo.
```

### Ambiente

```text
Use case: photorealistic-natural. Asset: large editorial photo for the about section of a fictional premium aesthetics clinic in Brazil, no people. Landscape 4:3 composition. Quiet luxury clinic reception: rounded ivory boucle armchair in foreground beside sculptural travertine round side table with minimal dried branch, tall softly illuminated archway on right, warm cream plaster walls, light oak vertical wood slats at back, softly curved cream reception counter in background, beige linen drapery and warm natural afternoon window light. Restrained brass detail, organic architectural shapes, welcoming and serene interior, clean spacious premium interior design magazine photograph, 35mm architectural lens. Palette off-white #FAF8F5, sand, taupe, natural stone. No signs, no logos, no words, no text, no medical devices, no watermarks.
```

### Procedimentos

```text
Use case: photorealistic-natural. Asset: six-photo contact sheet for premium aesthetics clinic treatment cards, landscape 2:1 ratio, precisely a seamless grid of 3 columns and 2 rows, equal rectangular cells 4:3, NO gaps, NO margins, NO text, NO letters. Six DISTINCT premium beauty editorial photographs consistent warm beige ivory palette, natural skin, soft elegant window lighting. Upper left cell: closeup adult woman's relaxed forehead and eyebrow with soft white headband, no needles. Upper middle cell: side closeup of adult woman's natural lips and cheek on warm beige background. Upper right cell: elegant mature adult woman's cheek and jawline with hand lightly touching skin. Lower left cell: professional wearing white gloves gently cleansing an adult woman's face with a white cotton pad, warm clean spa setting. Lower middle cell: beautiful clear glass serum bottle with pipette and cream-colored towel on travertine surface, botanical shadow. Lower right cell: closeup professional hands gently massaging an adult client's shoulder/upper back in warm serene spa, white towel draped appropriately. Tasteful nonsexual wellness photographs. Every cell must fill its equal rectangular region edge to edge. No grids or lines drawn on top. No branding, no typography, no invasive procedures, no before and after claims.
```
