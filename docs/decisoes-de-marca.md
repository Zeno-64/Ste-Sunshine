# Decisões de marca e design

Registro de escolhas não-óbvias tomadas na adaptação do template para a Ste
Sunshine, para não se perderem quando alguém (humano ou IA) mexer no código
depois.

## Paleta — contraste do rosa

O rosa exato da marca (`#E8828F`, cartão e logo) dá só **2,6:1** de contraste
com texto branco — reprova WCAG AA mesmo para texto grande (mínimo 3:1; texto
pequeno precisa de 4,5:1).

**Decisão:** o menu superior (`Header.tsx`) usa uma versão escurecida do rosa,
`--rose-header: 350 49% 53%` (`#C24C60`, ~4,7:1 com branco), só para os links
de navegação passarem em acessibilidade. O resto do site (Hero, Missão) mantém
o `--rose` original (`#E8828F`) mesmo com contraste mais baixo, porque ali o
texto é grande/decorativo e a fidelidade à cor da marca pesou mais que o
acessibilidade estrita.

Se o contraste do Hero/Missão incomodar depois, a correção é a mesma: criar
outra variável escurecida e trocar só o `bg-rose` daquelas seções — não mexer
no `--rose` global, que é a cor de referência da marca.

## Tipografia

O logo usa uma sans geométrica fina com letterspacing largo — não bate com a
serifada Cormorant Garamond usada nos títulos do site.

**Decisão (mantida de propósito):** ficou como estava. Cormorant Garamond
continua nos títulos e **Great Vibes** foi adicionada só para a assinatura
manuscrita "Eternizando memórias" / "Seja bem-vindo(a) ao meu sonho", imitando
o efeito do cartão de contato. Revisar se, depois de ver o site pronto, a
combinação parecer genérica demais — trocar os títulos por uma sans tipo
Jost/Montserrat Light aproximaria mais do logo.

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
