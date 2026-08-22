import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/data/catalog";
import { linkProps } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Mapas explícitos: o Tailwind precisa ver a classe inteira para gerá-la. */
const spanClass = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  7: "md:col-span-7",
  12: "md:col-span-12",
} as const;

const ratioClass = {
  "16/9": "aspect-[16/9]",
  "3/4": "aspect-[3/4]",
} as const;

export function CollectionsGrid() {
  return (
    <section id="colecoes" className="py-24 md:py-32">
      <div className="container-full">
        <Reveal className="text-center mb-16">
          <p className="text-eyebrow text-primary mb-3">Navegue por</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Coleções</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <div key={collection.slug} className={spanClass[collection.span]}>
              <Reveal delay={index * 0.08}>
                <a {...linkProps(collection.href)} className="group block relative">
                  <div
                    className={cn(
                      "relative overflow-hidden bg-muted/50",
                      ratioClass[collection.ratio],
                    )}
                  >
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-700" />

                    <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/60 mb-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        Coleção
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 group-hover:-translate-y-1 transition-transform duration-500">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed max-w-xs translate-y-1 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {collection.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                        <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/90">
                          Explorar
                        </span>
                        <ArrowRight className="h-4 w-4 text-white/90" />
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
