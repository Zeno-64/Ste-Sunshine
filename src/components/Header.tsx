import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { logoImage } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Âncoras da página — não há catálogo com destinos próprios, tudo cai no WhatsApp. */
const navItems = [
  { label: "Como funciona", href: site.links.howItWorks },
  { label: "Ideias", href: site.links.ideas },
  { label: "Sobre", href: site.links.about },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do fundo enquanto o menu mobile estiver aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLink =
    "text-xs font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors duration-300";

  return (
    <header
      className={cn(
        // Versão escurecida do rosa da marca, só aqui: passa contraste AA com texto branco.
        "sticky top-0 z-50 bg-rose-header text-white transition-shadow duration-500",
        scrolled && "shadow-md shadow-rose-header/30",
      )}
    >
      <nav className="container-full">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo tem fundo próprio na cor da marca — aparece como um selo, não se funde no header. */}
          <a href="#top" className="shrink-0">
            <img src={logoImage} alt={site.name} className="h-11 md:h-14 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={navLink}>
                {item.label}
              </a>
            ))}
            <a
              {...linkProps(site.links.whatsapp)}
              className="inline-flex items-center h-10 px-5 text-xs font-medium tracking-[0.15em] uppercase bg-white text-primary hover:bg-white/90 transition-colors duration-300"
            >
              Fazer meu ímã
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-white/20 bg-rose-header">
          <div className="container-full py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2.5 text-sm text-white/90"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-white/20 my-4" />
            <a
              {...linkProps(site.links.whatsapp)}
              className="py-3 text-center text-sm bg-white text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Fazer meu ímã
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
