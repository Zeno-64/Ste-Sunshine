/**
 * Ponto único de configuração da landing page.
 *
 * Como o site é vitrine + redirecionamento, todo clique de compra sai daqui.
 * Troque SHOP_URL pela loja real (Shopify, Nuvemshop, WhatsApp, Instagram...)
 * e os links por coleção, se cada uma tiver um destino próprio.
 */

export const SHOP_URL = "https://wa.me/5500000000000";

export const site = {
  name: "Stesunshine",
  tagline: "Objetos de casa e lifestyle selecionados para uma vida com intenção.",
  instagramHandle: "@stesunshine",
  instagramUrl: "https://instagram.com",
  email: "contato@stesunshine.com.br",
  links: {
    shopAll: SHOP_URL,
    about: "#sobre",
    lighting: SHOP_URL,
    ceramics: SHOP_URL,
    furniture: SHOP_URL,
    textiles: SHOP_URL,
    objects: SHOP_URL,
    seasonal: SHOP_URL,
  },
} as const;

/** Todo link externo abre em nova aba; âncoras internas ficam na página. */
export function linkProps(href: string) {
  const isExternal = /^https?:\/\//.test(href);
  return isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };
}
