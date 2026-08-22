# Hospedagem e deploy — playbook

Registro do que foi decidido e aprendido montando e publicando o site
Stesunshine, para não repetir a investigação em projetos futuros. As seções
"Como replicar em outro repositório" e "Erros que já apareceram" servem para
qualquer site estático novo, não só este.

Última atualização: 2026-08-22.

## Este projeto

- **Repositório:** https://github.com/Zeno-64/Ste-Sunshine (branch `main`)
- **Site no ar:** https://stesunshine.kevinbaradelli.workers.dev
- **Stack:** Vite + React + TypeScript + Tailwind + shadcn/ui
- **Origem do design:** reconstruído a partir do template *Maison / Artisan
  Home & Lifestyle* da Lovable (tokens de cor, tipografia e estrutura de
  seções extraídos do demo ao vivo, não copiados literalmente)
- **Onde editar conteúdo:**
  - [src/lib/site.ts](src/lib/site.ts) — nome da marca, links de
    redirecionamento (`SHOP_URL`), Instagram, e-mail
  - [src/data/catalog.ts](src/data/catalog.ts) — produtos, coleções, imagens
  - `index.html` — `<title>` e meta description

## Por que Cloudflare em vez de hospedagem paga

Cotação inicial era Hostinger a "R$ 13,99/mês" — na letra miúda isso é
R$ 671,52 pagos de uma vez por 48 meses, renovando a R$ 64,99/mês depois. O
site é 100% estático (build do Vite vira só HTML/CSS/JS, sem servidor, sem
banco), então não precisa de nada do que aquele plano vende (runtime Node,
MySQL gerenciado, CPU/RAM dedicados).

Cloudflare Workers/Pages serve arquivo estático **de graça e sem limite de
banda** — ver nota 3 em
[developers.cloudflare.com/workers/platform/pricing](https://developers.cloudflare.com/workers/platform/pricing/):
> "Requests to static assets are free and unlimited."

O limite de 100k requisições/dia do plano free só vale para **código de
servidor** rodando a cada requisição (funções, APIs). Isso só passaria a
importar se um dia o projeto ganhar lógica de backend (ex.: endpoint de
newsletter, cálculo de frete). Enquanto for site estático, fica de fora dessa
conta.

**Custo real e recorrente do projeto:** só o domínio, ~R$ 40/ano.

## Fluxo de atualização (o que fazer quando o cliente mandar conteúdo)

```
editar arquivos → git commit → git push → Cloudflare builda e publica sozinho
```

Não existe passo manual de deploy — o Cloudflare está com Git integrado e
builda a cada push na branch `main`. O pipeline configurado é:

1. `npm ci` (instala dependências)
2. `npm run build` (roda `tsc -b && vite build`, gera `dist/`)
3. `npx wrangler deploy` (publica `dist/` como assets estáticos, conforme
   `wrangler.jsonc`)

Leva ~40s do push até o ar, sem intervenção.

### Preview antes de publicar (quando o cliente precisa aprovar antes)

O projeto está com **"Builds for non-production branches"** ativado. Isso
significa: criar uma branch e abrir PR gera uma URL de preview separada, sem
tocar o site de produção:

```bash
git checkout -b conteudo-novo
# editar, commitar
git push -u origin conteudo-novo
# abrir PR no GitHub — Cloudflare comenta com a URL de preview
```

Depois de aprovado, merge na `main` publica em produção. Para mudanças
pequenas sem necessidade de aprovação visual prévia, commitar direto na
`main` é razoável.

## Domínio

- Registrar `.com.br` **só é possível em [registro.br](https://registro.br)**
  — é o registrador oficial e exclusivo dessa categoria. Cloudflare Registrar
  não vende `.com.br`.
- Testar disponibilidade direto por URL (sem precisar abrir o site e digitar):
  ```
  https://registro.br/busca-dominio/?fqdn=NOME.com.br
  ```
- Preço oficial (checado em 2026-08-22): R$ 40,00/ano; R$ 76,00/2 anos;
  R$ 184,00/5 anos.
- **Registrar no CPF/CNPJ do cliente, não no seu.** O titular do registro é
  quem legalmente controla o domínio; ficar no seu nome vira problema se
  houver desentendimento futuro. Você continua administrando o DNS como
  contato técnico, sem precisar ser o titular.
- Antes de fechar o nome com o cliente, checar também:
  - **Marca no INPI** (busca.inpi.gov.br) — nome com marca registrada por
    terceiro na mesma categoria é risco de contestação depois.
  - **@ disponível no Instagram** — evita marca inconsistente entre site e
    rede social.
- Depois de registrado, ligar ao projeto em: Cloudflare dashboard → Workers
  & Pages → projeto → **Custom Domains → Add domain**. SSL é automático.
  O fluxo de `git push` para publicar continua idêntico depois disso.

## Como replicar em outro repositório

1. `npm create vite@latest` (ou copiar a base deste projeto) com template
   React + TypeScript
2. Instalar Tailwind + shadcn/ui (`components.json` deste repo serve de
   referência de configuração)
3. Adicionar `.nvmrc` com a versão do Node usada localmente — **sem isso o
   build do Cloudflare pode pegar uma versão diferente e falhar**
4. Adicionar `wrangler.jsonc` na raiz **antes** de criar o projeto no
   Cloudflare:
   ```jsonc
   {
     "name": "nome-do-projeto",
     "compatibility_date": "2024-11-01",
     "assets": { "directory": "./dist" }
   }
   ```
   Validar localmente antes de subir: `npx wrangler deploy --dry-run`
   (não publica nada, só confirma que os arquivos são encontrados).
5. `git init -b main`, commit, criar repositório vazio no GitHub (sem
   README/gitignore automático, para não conflitar), `git remote add origin`,
   `git push -u origin main`
6. No Cloudflare dashboard: **Workers & Pages → Create app** → importar do
   Git → selecionar o repositório. Preencher:
   - Project name: nome do projeto
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy` (já vem preenchido por padrão)
   - Deixar "Protect with Cloudflare Access" **desligado** — isso exigiria
     login para qualquer visitante ver o site
7. Deploy. URL final sai como `nome.<conta>.workers.dev` (esse fluxo unificado
   usa esse domínio, não `.pages.dev`)

## Erros que já apareceram (e a correção)

- **`npx wrangler deploy` falhando no primeiro deploy** — o fluxo atual do
  Cloudflare (Workers unificado com Pages) roda esse comando por padrão, mas
  ele precisa de `wrangler.jsonc` dizendo onde estão os arquivos estáticos.
  Sem isso, falha. Correção: criar o `wrangler.jsonc` do passo 4 acima antes
  de configurar o projeto no painel.
- **Classe Tailwind `duration-[1200ms]` gerando warning de ambiguidade** —
  o build funciona, mas produz warning "matches multiple utilities". Trocado
  por `duration-1000` (classe padrão do Tailwind).
- **Overflow horizontal de ~6px no mobile (375px)** — causado por dois
  fatores combinados: o deslocamento lateral inicial da animação de entrada
  (`Reveal` com `direction="left"/"right"`) empurrando a coluna para fora do
  viewport antes de assentar, e um botão com padding fixo (`px-10`) mais
  largo que a tela. Corrigido com `overflow-hidden` no container da seção
  afetada e padding responsivo (`px-6 sm:px-10`) no componente de botão.

## Pendências deste projeto especificamente

- Conteúdo (textos, fotos, produtos) ainda é placeholder do template
  original — trocar quando o cliente enviar o material real.
- Nicho atual da copy é casa/lifestyle (cerâmica, iluminação); se o negócio
  real for outro, ajustar `catalog.ts` e os textos das seções junto com as
  fotos, não depois.
- Formulário de newsletter no rodapé não está ligado a nenhum serviço (só
  evita reload da página).
- Domínio `stesunshine.com.br` estava disponível em 2026-08-22, ainda não
  registrado.
