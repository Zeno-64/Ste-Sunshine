/**
 * Ponto único de configuração da landing page.
 *
 * O site é vitrine + redirecionamento: não há carrinho nem checkout.
 * Todo CTA de compra/orçamento sai daqui e cai no WhatsApp da Stephani.
 */

/** (11) 98418-7982 — formato internacional, sem símbolos */
export const WHATSAPP_NUMBER = "5511984187982";

/**
 * Detecta se o visitante está num aparelho móvel.
 *
 * Ordem de confiança: `userAgentData.mobile` (sinal explícito do navegador,
 * Chromium) → toque + UA de Mac (iPadOS moderno mente e se diz Safari de
 * desktop) → regex de UA como último recurso.
 */
function isMobileDevice() {
  if (typeof navigator === "undefined") return false;

  const uaData = (
    navigator as Navigator & { userAgentData?: { mobile?: boolean } }
  ).userAgentData;
  if (typeof uaData?.mobile === "boolean") return uaData.mobile;

  const ua = navigator.userAgent;
  if (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua)) return true;

  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(ua);
}

/**
 * Monta o link do CTA conforme o aparelho.
 *
 * **Mobile → `wa.me`**: abre o app direto, que é o caminho nativo e de onde
 * vem a maior parte do público (Instagram).
 *
 * **Desktop → `web.whatsapp.com/send`**: vai direto para o WhatsApp Web, sem
 * passar pela tentativa de handoff `whatsapp://` para o app instalado. Essa
 * tentativa é o ponto de falha: em máquinas com o protocolo `whatsapp://`
 * registrado mas sem app por trás (sobra comum de uma desinstalação), o
 * navegador considera a entrega bem-sucedida, nada abre e a aba se fecha
 * sozinha — o visitante clica no único CTA de venda do site e não acontece
 * nada. Ver docs/decisoes-de-marca.md.
 */
const whatsappLink = (message: string) => {
  const text = encodeURIComponent(message);
  return isMobileDevice()
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`;
};

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
