# Stepsunshine — landing page

Landing page de uma página no estilo editorial escandinavo (terracota + creme,
serifada + sans), reconstruída a partir do template *Maison / Artisan Home &
Lifestyle*. É vitrine visual: todos os CTAs **redirecionam** para fora, não há
carrinho, checkout nem backend.

## Rodando

```bash
npm install
npm run dev
```

Abre em http://localhost:5173. Build de produção: `npm run build` (saída em `dist/`).

## Onde mexer

### Links de redirecionamento — `src/lib/site.ts`

Todo clique de compra sai deste arquivo. Troque `SHOP_URL` pelo destino real
(WhatsApp, Shopify, Nuvemshop, Instagram) e, se cada coleção tiver um link
próprio, ajuste as chaves dentro de `links`.

```ts
export const SHOP_URL = "https://wa.me/5500000000000";
```

O helper `linkProps()` abre links `http(s)` em nova aba e mantém âncoras
internas (`#sobre`, `#colecoes`) na própria página.

### Nome, contato e redes — `src/lib/site.ts`

`name`, `tagline`, `instagramHandle`, `instagramUrl`, `email`.

### Produtos e coleções — `src/data/catalog.ts`

- `collections` — a grade assimétrica. `span` define quantas das 12 colunas a
  peça ocupa no desktop (7 / 5 / 4 / 4 / 4 / 12) e `ratio` a proporção da foto.
- `products` — os cards de "Novidades". Cada um tem `image` e `hoverImage`
  (a segunda foto entra em cross-fade no hover).
- `socialImages`, `heroImage`, `featuredImage`.

As imagens são fotos livres do Unsplash carregadas por URL, apenas como
placeholder. Substitua pelas fotos reais antes de publicar — de preferência
colocando os arquivos em `public/` e apontando para `/nome-da-foto.jpg`.

### Cores e tipografia — `src/index.css`

Os tokens ficam em `:root` no formato HSL sem `hsl()`, do jeito que o
shadcn/ui espera:

| token          | valor           | uso                          |
| -------------- | --------------- | ---------------------------- |
| `--primary`    | `18 45% 45%`    | terracota, botões e destaques |
| `--background` | `40 33% 97%`    | creme quente                 |
| `--linen`      | `35 25% 93%`    | fundo das seções alternadas  |
| `--charcoal`   | `30 10% 15%`    | texto e rodapé               |
| `--radius`     | `0.25rem`       | cantos quase retos           |

Fontes: **Cormorant Garamond** (títulos) e **Inter** (corpo), carregadas via
Google Fonts em `index.html`.

## Estrutura

```
src/
  App.tsx                  ordem das seções
  lib/site.ts              links e dados da marca
  data/catalog.ts          produtos, coleções, imagens
  components/
    Header.tsx             nav sticky, dropdown de coleções, menu mobile
    Hero.tsx               full-screen com parallax
    FeaturedCollection.tsx bloco 50/50
    LatestProducts.tsx     grade de 4 cards
    ProductCard.tsx        card de imagem dupla
    CollectionsGrid.tsx    grade assimétrica de 12 colunas
    AboutBlock.tsx         manifesto centralizado
    SocialFeed.tsx         grade do Instagram
    Footer.tsx             newsletter + colunas de links
    Reveal.tsx             animação de entrada no scroll
    ui/button.tsx          Button / ButtonLink (padrão shadcn)
```

`components.json` está configurado, então `npx shadcn@latest add <componente>`
funciona se precisar de mais peças de UI.

## Pendências antes de publicar

- Trocar `SHOP_URL` e os links por coleção.
- Substituir as fotos do Unsplash pelas imagens reais dos produtos.
- Ligar o formulário de newsletter a um serviço (hoje ele só evita o reload).
- Revisar `<title>` e a meta description em `index.html`.
