# Decisões de marca e design

Registro de escolhas não-óbvias tomadas na adaptação do template para a Ste
Sunshine, para não se perderem quando alguém (humano ou IA) mexer no código
depois.

## Paleta — contraste do rosa

O rosa exato da marca (`#E8828F`, cartão e logo) dá só **2,6:1** de contraste
com texto branco — reprova WCAG AA mesmo para texto grande (mínimo 3:1; texto
pequeno precisa de 4,5:1).

**Decisão original (24/08):** o menu superior (`Header.tsx`) usava uma versão
escurecida do rosa, `--rose-header: 350 49% 53%` (`#C24C60`, ~4,7:1 com
branco), só para os links de navegação passarem em acessibilidade.

**Revertida em 26/08, a pedido do Kevin:** o header voltou ao `--rose` exato
(`#E8828F`). Motivo dado: agora que o Hero usa foto real de fundo (em vez do
rosa sólido), o contexto visual mudou e a fidelidade total à cor da marca no
topo pesou mais do que o contraste. `--rose-header` continua definido em
`src/index.css` (não foi apagado) caso precise voltar — é só trocar
`bg-rose` por `bg-rose-header` em `Header.tsx`. **Nota:** o menu com o rosa
exato ainda reprova WCAG AA para o texto branco pequeno da navegação; ciente
e aceito pelo Kevin.

Hero e Missão sempre usaram o `--rose` original — nisso nada mudou.

## Tipografia

O logo usa uma sans geométrica fina com letterspacing largo — não bate com a
serifada Cormorant Garamond usada nos títulos do site.

**Decisão (mantida de propósito):** ficou como estava. Cormorant Garamond
continua nos títulos e **Great Vibes** foi adicionada só para a assinatura
manuscrita "Eternizando memórias" / "Seja bem-vindo(a) ao meu sonho", imitando
o efeito do cartão de contato. Revisar se, depois de ver o site pronto, a
combinação parecer genérica demais — trocar os títulos por uma sans tipo
Jost/Montserrat Light aproximaria mais do logo.

## Logo — recorte do arquivo original

O arquivo enviado (`public/images/logo.jpg`) era o emblema completo (sol +
"STE SUNSHINE", 2694×1568px) com muita margem rosa ao redor. Comprimido nos
~30-40px de altura do header, o emblema inteiro ficava ilegível — o texto
ocupava só uma fração minúscula da imagem.

**Decisão (26/08):** recortado para conter só a faixa de texto "STE
SUNSHINE" (sem o círculo/raios do sol), com respiro vertical pequeno pra não
pegar fragmentos dos arcos. Resultado: proporção ~8,7:1 (bem mais larga que
alta) — por isso o `<img>` no header usa `h-7 md:h-10 w-auto` em vez de uma
altura maior. O fundo rosa do recorte (~#E9878F) é essencialmente idêntico ao
`--rose` da marca, então se funde no header sem borda visível.

Se um dia sobrar o arquivo original (emblema completo) para usar em outro
lugar (favicon, redes sociais), ele não está mais no repo — foi sobrescrito.
Pedir de novo pro Kevin se precisar.

## Decisões em aberto (não resolvidas ainda)

- **Ocasiões da grade "O que vira ímã"** (Viagens, Datas especiais, Família,
  Pets, Conquistas, Lembrancinhas) foram inferidas do texto da fundadora —
  precisam ser validadas com a Stephani, especialmente Pets e Lembrancinhas,
  que não aparecem no texto original.
- **Preço:** hoje não aparece em lugar nenhum. Falta decidir se entra uma
  faixa de valor ("a partir de R$ X") em algum CTA.
- **Seções extras:** depoimentos, FAQ (prazo, formatos, frete, mínimo por
  pedido) e prova social de volume ainda não existem.
- **`ProductCard.tsx` e `LatestProducts.tsx`** foram removidos (estão no
  histórico do git) por não haver preço nem vitrine de produto único. Se um
  catálogo com preço voltar a fazer sentido, restaurar em vez de recriar do
  zero.
