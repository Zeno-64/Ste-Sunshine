import { whatsappFor } from "@/lib/site";

/**
 * PLACEHOLDER DE IMAGEM — temporário.
 *
 * O acervo de fotos dos ímãs ainda não existe. Em vez de fotos de banco de
 * imagens (que não têm nada a ver com o produto), cada bloco visual usa um
 * cartão na cor da marca com o nome da peça. Quando as fotos reais chegarem,
 * troque o campo `image` pelo caminho do arquivo (ex.: "/fotos/viagens.jpg")
 * e apague este helper.
 */
export function placeholder(label: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2a6b0"/><stop offset="100%" stop-color="#e0748a"/>
    </linearGradient></defs>
    <rect width="800" height="1000" fill="url(#g)"/>
    <text x="400" y="500" text-anchor="middle" fill="#ffffff" fill-opacity="0.9"
      font-family="Georgia, serif" font-size="54">${label}</text>
    <text x="400" y="556" text-anchor="middle" fill="#ffffff" fill-opacity="0.55"
      font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6">FOTO EM BREVE</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export type Occasion = {
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
  /** Colunas ocupadas na grade assimétrica (12 colunas no desktop). */
  span: 4 | 5 | 7 | 12;
  ratio: "16/9" | "3/4";
};

/** As ocasiões que mais viram ímã — cada card abre o WhatsApp com o tema. */
export const occasions: Occasion[] = [
  {
    slug: "viagens",
    name: "Viagens",
    description: "O lugar que marcou a sua história, na porta da geladeira",
    image: placeholder("Viagens"),
    href: whatsappFor("uma viagem"),
    span: 7,
    ratio: "16/9",
  },
  {
    slug: "datas-especiais",
    name: "Datas especiais",
    description: "Aniversários, casamentos e aquele dia que ninguém esquece",
    image: placeholder("Datas especiais"),
    href: whatsappFor("uma data especial"),
    span: 5,
    ratio: "3/4",
  },
  {
    slug: "familia",
    name: "Família",
    description: "As pessoas que fazem o coração sorrir todo dia",
    image: placeholder("Família"),
    href: whatsappFor("fotos da família"),
    span: 4,
    ratio: "3/4",
  },
  {
    slug: "pets",
    name: "Pets",
    description: "Porque ele também faz parte das melhores memórias",
    image: placeholder("Pets"),
    href: whatsappFor("meu pet"),
    span: 4,
    ratio: "3/4",
  },
  {
    slug: "conquistas",
    name: "Conquistas",
    description: "Formatura, casa nova, primeiro emprego — vitórias que ficam",
    image: placeholder("Conquistas"),
    href: whatsappFor("uma conquista"),
    span: 4,
    ratio: "3/4",
  },
  {
    slug: "lembrancinhas",
    name: "Lembrancinhas",
    description: "Kits personalizados para presentear quem esteve com você",
    image: placeholder("Lembrancinhas"),
    href: whatsappFor("lembrancinhas de festa"),
    span: 12,
    ratio: "16/9",
  },
];

export type Step = {
  slug: string;
  step: string;
  title: string;
  description: string;
};

/** Substitui a antiga vitrine de produtos com preço: aqui tudo é sob encomenda. */
export const steps: Step[] = [
  {
    slug: "escolha",
    step: "01",
    title: "Escolha a memória",
    description:
      "Aquela foto da viagem, do aniversário ou do dia que você não quer esquecer.",
  },
  {
    slug: "conversa",
    step: "02",
    title: "Chame no WhatsApp",
    description:
      "A gente conversa sobre formato, quantidade e acabamento — sem compromisso.",
  },
  {
    slug: "arte",
    step: "03",
    title: "Aprove a arte",
    description:
      "Você recebe a prévia do seu ímã e só seguimos depois do seu ok.",
  },
  {
    slug: "entrega",
    step: "04",
    title: "Receba em casa",
    description:
      "Sua lembrança chega embalada com carinho, pronta para ganhar a geladeira.",
  },
];

/** Grade do Instagram — trocar pelas fotos reais do perfil. */
export const socialImages = [
  placeholder("Post 1"),
  placeholder("Post 2"),
  placeholder("Post 3"),
  placeholder("Post 4"),
  placeholder("Post 5"),
  placeholder("Post 6"),
];

/** Foto de capa e retrato da Stephani — trocar por arquivos em /public. */
export const heroImage = placeholder("Ste Sunshine");
export const ownerImage = placeholder("Stephani Silva");
