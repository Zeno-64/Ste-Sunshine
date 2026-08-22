import type { FormEvent } from "react";
import { ArrowRight, Instagram } from "lucide-react";
import { collections } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const footerLink =
  "text-sm text-background/60 hover:text-background transition-colors duration-300";

const columnTitle =
  "text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5";

export function Footer() {
  // Sem backend nesta landing: o envio só evita o reload da página.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/10">
        <div className="container-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <a
                href="#top"
                className="font-serif text-3xl md:text-4xl tracking-tight text-background"
              >
                {site.name}
              </a>
              <p className="mt-3 text-sm text-background/50 leading-relaxed max-w-xs">
                {site.tagline}
              </p>
            </div>

            <div className="max-w-sm w-full">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-background/40 mb-3">
                Fique por dentro
              </p>
              <form className="flex gap-0" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail"
                  aria-label="Seu e-mail"
                  className="flex-1 h-12 px-4 text-sm bg-background/5 border border-background/15 text-background placeholder:text-background/30 focus:outline-none focus:border-background/40 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Inscrever-se"
                  className="h-12 px-5 bg-background text-foreground hover:bg-background/90 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h4 className={columnTitle}>Coleções</h4>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection.slug}>
                  <a {...linkProps(collection.href)} className={footerLink}>
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={columnTitle}>Explorar</h4>
            <ul className="space-y-3">
              <li>
                <a {...linkProps(site.links.shopAll)} className={footerLink}>
                  Ver tudo
                </a>
              </li>
              <li>
                <a href="#sobre" className={footerLink}>
                  Nossa história
                </a>
              </li>
              <li>
                <a href="#colecoes" className={footerLink}>
                  Coleções
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={columnTitle}>Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href={"mailto:" + site.email} className={footerLink}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(footerLink, "inline-flex items-center gap-2")}
                >
                  <Instagram className="h-4 w-4" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={columnTitle}>Atendimento</h4>
            <p className="text-sm text-background/60 leading-relaxed">
              Segunda a sexta, das 9h às 18h.
              <br />
              Respondemos em até um dia útil.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-background/40">Feito com cuidado no Brasil</p>
        </div>
      </div>
    </footer>
  );
}
