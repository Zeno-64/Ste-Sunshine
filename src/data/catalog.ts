import { site } from "@/lib/site";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
  /** Colunas ocupadas na grade assimétrica (12 colunas no desktop). */
  span: 4 | 5 | 7 | 12;
  ratio: "16/9" | "3/4";
};

export const collections: Collection[] = [
  {
    slug: "lighting",
    name: "Iluminação",
    description: "Formas escultóricas que projetam calor e sombra",
    image: img("photo-1507473885765-e6ed057f782c", 1600),
    href: site.links.lighting,
    span: 7,
    ratio: "16/9",
  },
  {
    slug: "ceramics",
    name: "Cerâmica",
    description: "Peças feitas à mão, cada uma com sua imperfeição",
    image: img("photo-1565193566173-7a0ee3dbe261"),
    href: site.links.ceramics,
    span: 5,
    ratio: "3/4",
  },
  {
    slug: "furniture",
    name: "Mobiliário",
    description: "Madeira maciça e linhas que envelhecem bem",
    image: img("photo-1555041469-a586c61ea9bc"),
    href: site.links.furniture,
    span: 4,
    ratio: "3/4",
  },
  {
    slug: "textiles",
    name: "Têxteis",
    description: "Linho lavado, lã crua e algodão natural",
    image: img("photo-1616486338812-3dadae4b4ace"),
    href: site.links.textiles,
    span: 4,
    ratio: "3/4",
  },
  {
    slug: "objects",
    name: "Objetos & Vasos",
    description: "Pequenas peças que mudam um ambiente inteiro",
    image: img("photo-1578500494198-246f612d3b3d"),
    href: site.links.objects,
    span: 4,
    ratio: "3/4",
  },
  {
    slug: "seasonal",
    name: "Coleção Sazonal",
    description: "Uma curadoria que muda com a estação",
    image: img("photo-1600210492486-724fe5c67fb0", 1600),
    href: site.links.seasonal,
    span: 12,
    ratio: "16/9",
  },
];

export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: string;
  description: string;
  image: string;
  /** Segunda imagem revelada no hover do card. */
  hoverImage: string;
  badge?: string;
  href: string;
};

export const products: Product[] = [
  {
    slug: "arc-pendant-light",
    name: "Pendente Arco",
    collection: "Iluminação",
    price: "R$ 1.480",
    description: "Um arco de latão curvado à mão",
    image: img("photo-1524484485831-a92ffc0de03f"),
    hoverImage: img("photo-1540932239986-30128078f3c5"),
    badge: "Destaque",
    href: site.links.lighting,
  },
  {
    slug: "orb-table-lamp",
    name: "Luminária Orb",
    collection: "Iluminação",
    price: "R$ 890",
    description: "Vidro soprado sobre base de travertino",
    image: img("photo-1513506003901-1e6a229e2d15"),
    hoverImage: img("photo-1507473885765-e6ed057f782c"),
    href: site.links.lighting,
  },
  {
    slug: "large-sculptural-vessel",
    name: "Vaso Escultural Grande",
    collection: "Cerâmica",
    price: "R$ 640",
    description: "Grés torneado à mão, esmalte fosco",
    image: img("photo-1578749556568-bc2c40e68b61"),
    hoverImage: img("photo-1565193566173-7a0ee3dbe261"),
    badge: "Novo",
    href: site.links.ceramics,
  },
  {
    slug: "everyday-serving-bowl",
    name: "Bowl de Servir",
    collection: "Cerâmica",
    price: "R$ 280",
    description: "Para o uso diário, feito para durar",
    image: img("photo-1610701596007-11502861dcfa"),
    hoverImage: img("photo-1578500494198-246f612d3b3d"),
    href: site.links.ceramics,
  },
];

export const socialImages = [
  img("photo-1618221195710-dd6b41faaea6", 600),
  img("photo-1600210492486-724fe5c67fb0", 600),
  img("photo-1600585154340-be6161a56a0c", 600),
  img("photo-1586023492125-27b2c045efd7", 600),
  img("photo-1602028915047-37269d1a73f7", 600),
  img("photo-1616486338812-3dadae4b4ace", 600),
];

export const heroImage = img("photo-1618221195710-dd6b41faaea6", 2000);
export const featuredImage = img("photo-1507473885765-e6ed057f782c", 1400);
