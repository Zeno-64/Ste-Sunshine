import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { featuredImage } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";

export function FeaturedCollection() {
  return (
    <section className="py-20 md:py-28">
      {/* overflow-hidden contem o deslocamento lateral do reveal e evita scroll horizontal no mobile */}
      <div className="container-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal direction="left" className="relative aspect-[4/5] overflow-hidden group">
            <img
              src={featuredImage}
              alt="Luminárias escultóricas da coleção Iluminação"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </Reveal>

          <Reveal direction="right" className="md:py-12">
            <p className="text-eyebrow text-primary mb-4">Coleção em destaque</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.95]">
              Iluminação
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Formas escultóricas que projetam calor e sombra. Peças pensadas para
              transformar qualquer ambiente num refúgio de luz.
            </p>
            <ButtonLink {...linkProps(site.links.lighting)}>
              Ver iluminação
              <ArrowRight className="ml-3 h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
