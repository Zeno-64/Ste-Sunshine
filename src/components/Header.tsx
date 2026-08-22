import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { collections } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

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
    "text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border"
          : "bg-background/80 backdrop-blur-sm border-transparent",
      )}
    >
      <nav className="container-full">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a
            href="#top"
            className="font-serif text-2xl md:text-3xl tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          >
            {site.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button className={cn(navLink, "inline-flex items-center gap-1 h-10")}>
                Coleções
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    collectionsOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "absolute left-0 top-full w-64 bg-background border border-border shadow-lg p-2 transition-all duration-200",
                  collectionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1",
                )}
              >
                {collections.map((collection) => (
                  <a
                    key={collection.slug}
                    {...linkProps(collection.href)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  >
                    {collection.name}
                  </a>
                ))}
              </div>
            </div>

            <a {...linkProps(site.links.shopAll)} className={navLink}>
              Ver tudo
            </a>
            <a href="#sobre" className={navLink}>
              Sobre
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-full py-6 flex flex-col gap-1">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/60 mb-2">
              Coleções
            </p>
            {collections.map((collection) => (
              <a
                key={collection.slug}
                {...linkProps(collection.href)}
                className="py-2.5 text-sm text-muted-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {collection.name}
              </a>
            ))}
            <div className="h-px bg-border my-4" />
            <a
              {...linkProps(site.links.shopAll)}
              className="py-2.5 text-sm text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Ver tudo
            </a>
            <a
              href="#sobre"
              className="py-2.5 text-sm text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
