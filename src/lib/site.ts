/**
 * Ponto único de configuração da landing page.
 *
 * O site é vitrine + redirecionamento: não há carrinho nem checkout.
 * Todo CTA de compra/orçamento sai daqui e cai no WhatsApp da Stephani.
 */

/** (11) 98418-7982 — formato internacional, sem símbolos, para o wa.me */
export const WHATSAPP_NUMBER = "5511984187982";

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Cada CTA leva uma mensagem já preenchida, para a conversa começar com contexto. */
export const SHOP_URL = whatsappLink(
  "Oi, Stephani! Vi o site e quero encomendar um ímã personalizado 💗",
);

export const site = {
  name: "Ste Sunshine",
  owner: "Stephani Silva",
  tagline: "Eternizando memórias",
  description:
    "Ímãs de geladeira personalizados que transformam fotos, lugares e momentos especiais em lembranças que ficam.",
  phoneLabel: "(11) 98418-7982",
  instagramHandle: "@_stephanisilvaa",
  instagramUrl: "https://instagram.com/_stephanisilvaa",
  links: {
    whatsapp: SHOP_URL,
    quote: whatsappLink(
      "Oi, Stephani! Quero um orçamento para ímãs personalizados 💗",
    ),
    about: "#sobre",
    howItWorks: "#como-funciona",
    ideas: "#ideias",
  },
} as const;

/** Todo link externo abre em nova aba; âncoras internas ficam na página. */
export function linkProps(href: string) {
  const isExternal = /^https?:\/\//.test(href);
  return isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };
}

/** Abre o WhatsApp já com a mensagem da ocasião escolhida. */
export function whatsappFor(subject: string) {
  return whatsappLink(`Oi, Stephani! Quero ímãs personalizados de ${subject} 💗`);
}
