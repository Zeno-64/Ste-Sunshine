# Ste Sunshine — landing page

Landing page de uma página da **Ste Sunshine**, marca de ímãs de geladeira
personalizados da Stephani Silva ("Eternizando memórias"). É vitrine visual:
todos os CTAs **redirecionam para o WhatsApp**, não há carrinho, checkout nem
backend.

Construída a partir do template *Maison / Artisan Home & Lifestyle* — a
estrutura de seções foi reaproveitada, mas conteúdo, paleta e catálogo foram
refeitos para a marca.

## Rodando

```bash
npm install
npm run dev
```

Abre em http://localhost:5173. Build de produção: `npm run build` (saída em `dist/`).

## Onde mexer

### Contato e CTAs — `src/lib/site.ts`

Todo clique de encomenda sai deste arquivo. `WHATSAPP_NUMBER` é o telefone em
formato internacional; os links já vão com mensagem preenchida.

```ts
export const WHATSAPP_NUMBER = "5511984187982"; // (11) 98418-7982
```

- `whatsappFor(assunto)` monta o link de cada ocasião ("Quero ímãs de uma viagem").
- `linkProps()` abre links `http(s)` em nova aba e mantém âncoras internas
  (`#sobre`, `#ideias`, `#como-funciona`) na própria página.
- `name`, `owner`, `tagline`, `phoneLabel`, `instagramHandle`, `instagramUrl`.

### Conteúdo das seções — `src/data/catalog.ts`

- `occasions` — a grade "O que vira ímã". `span` define quantas das 12 colunas a
  peça ocupa no desktop (7 / 5 / 4 / 4 / 4 / 12) e `ratio` a proporção da foto.
- `steps` — os 4 passos de "Como funciona". Substituiu a vitrine de produtos com
  preço do template: ímã personalizado é sob encomenda.
- `socialImages`, `heroImage`, `ownerImage`.

> **Imagens são placeholders.** O helper `placeholder(label)` desenha um cartão
> SVG no rosa da marca com o nome da peça e o aviso "foto em breve". Quando as
> fotos reais chegarem, coloque os arquivos em `public/` e troque o campo
> `image` por `/nome-da-foto.jpg`. Depois que nenhum `placeholder()` sobrar,
> apague o helper.

### Cores e tipografia — `src/index.css`

Os tokens ficam em `:root` no formato HSL sem `hsl()`, do jeito que o
shadcn/ui espera:

| token            | valor           | uso                                          |
| ---------------- | --------------- | --------------------------------------------- |
| `--rose`         | `352 69% 71%`   | rosa exato da marca (#E8828F) — hero, missão  |
| `--rose-header`  | `350 49% 53%`   | rosa escurecido (#C24C60), só no menu         |
| `--rose-deep`    | `352 55% 58%`   | rosa intermediário                            |
| `--primary`      | `351 54% 46%`   | rosa fechado, para texto pequeno e botões     |
| `--background`   | `350 50% 99%`   | branco levemente rosado                       |
| `--linen`        | `352 55% 96%`   | fundo das seções alternadas                   |
| `--charcoal`     | `345 14% 18%`   | texto e rodapé                                |
| `--radius`       | `0.25rem`       | cantos quase retos                            |

O rosa exato da marca não tem contraste suficiente para texto branco pequeno
(2,6:1, reprova WCAG AA). Por isso o menu superior usa `--rose-header`, uma
versão escurecida só para ali; o resto do site mantém o rosa exato. Detalhes e
justificativa completa em [`docs/decisoes-de-marca.md`](docs/decisoes-de-marca.md).

Fontes: **Cormorant Garamond** (títulos), **Inter** (corpo) e **Great Vibes**
(assinatura manuscrita, imitando o "Eternizando memórias" do cartão), carregadas
via Google Fonts em `index.html`.

## Estrutura

```
src/
  App.tsx                  ordem das seções
  lib/site.ts              contato, links de WhatsApp e dados da marca
  data/catalog.ts          ocasiões, passos e imagens
  components/
    Header.tsx             nav sticky no rosa da marca, menu mobile
    Hero.tsx               hero tipográfico sobre o rosa
    HowItWorks.tsx         os 4 passos do pedido
    IdeasGrid.tsx          grade assimétrica de 12 colunas ("O que vira ímã")
    OwnerStory.tsx         bloco 50/50 com a foto e a história da Stephani
    MissionBlock.tsx       missão da marca, centralizada no rosa
    SocialFeed.tsx         grade do Instagram
    Footer.tsx             contato, links e CTA de WhatsApp
    Reveal.tsx             animação de entrada no scroll
    ui/button.tsx          Button / ButtonLink (padrão shadcn)
```

`components.json` está configurado, então `npx shadcn@latest add <componente>`
funciona se precisar de mais peças de UI.

## Pendências antes de publicar

- Já têm foto real: hero, retrato da Stephani, Viagens, Família e Pets
  (`public/images/`). Faltam fotos de **Datas especiais**, **Conquistas**,
  **Lembrancinhas** e os 6 posts do feed do Instagram — hoje em `placeholder()`.
- `public/images/logo.jpg` tem 1,7 MB; vale comprimir antes de publicar (o
  arquivo tem fundo rosa próprio, sem transparência).
- Validar com a Stephani as 6 ocasiões da grade — ver
  [`docs/decisoes-de-marca.md`](docs/decisoes-de-marca.md).
- Definir se entra alguma referência de preço / faixa de valores.
- Conferir se o rosa `#E8828F` é exatamente o da identidade.
