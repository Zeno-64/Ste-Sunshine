import { Instagram, MessageCircle } from "lucide-react";
import { occasions } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const footerLink =
  "text-sm text-background/60 hover:text-background transition-colors duration-300";

const columnTitle =
  "text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/10">
        <div className="container-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <a
                href="#top"
                className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase text-background"
              >
                {site.name}
              </a>
              <p className="font-script text-3xl text-rose mt-2">{site.tagline}</p>
            </div>

            {/* Sem newsletter: não há backend e o canal real de contato é o WhatsApp. */}
            <a
              {...linkProps(site.links.whatsapp)}
              className="inline-flex items-center justify-center gap-3 h-12 px-8 text-xs font-medium tracking-[0.15em] uppercase bg-rose text-white hover:bg-rose/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Encomendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className={columnTitle}>Ideias de ímã</h4>
            <ul className="space-y-3">
              {occasions.map((occasion) => (
                <li key={occasion.slug}>
                  <a {...linkProps(occasion.href)} className={footerLink}>
                    {occasion.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={columnTitle}>Navegar</h4>
            <ul className="space-y-3">
              <li>
                <a href={site.links.howItWorks} className={footerLink}>
                  Como funciona
                </a>
              </li>
              <li>
                <a href={site.links.ideas} className={footerLink}>
                  O que vira ímã
                </a>
              </li>
              <li>
                <a href={site.links.about} className={footerLink}>
                  Sobre a Stephani
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={columnTitle}>Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  {...linkProps(site.links.whatsapp)}
                  className={cn(footerLink, "inline-flex items-center gap-2")}
                >
                  <MessageCircle className="h-4 w-4" />
                  {site.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  {...linkProps(site.instagramUrl)}
                  className={cn(footerLink, "inline-flex items-center gap-2")}
                >
                  <Instagram className="h-4 w-4" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-background/50 leading-relaxed">
              Atendimento pelo WhatsApp.
              <br />
              Respondo o mais rápido possível 💗
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-background/40">Feito à mão, com carinho</p>
        </div>
      </div>
    </footer>
  );
}
