import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";

export function LatestProducts() {
  return (
    <section className="py-20 md:py-28 bg-linen">
      <div className="container-full">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-eyebrow text-primary mb-3">Acabou de chegar</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Novidades</h2>
          </div>
          <a
            {...linkProps(site.links.shopAll)}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-300 group"
          >
            Ver todos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.1}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
