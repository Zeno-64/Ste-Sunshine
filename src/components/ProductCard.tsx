import { Heart } from "lucide-react";
import type { Product } from "@/data/catalog";
import { linkProps } from "@/lib/site";

/**
 * Card de imagem dupla: a segunda foto entra em cross-fade no hover.
 * O coração é decorativo — a landing não guarda estado de wishlist.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <a {...linkProps(product.href)} className="block">
        <div className="relative overflow-hidden bg-muted/50 mb-5 aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <span className="absolute top-5 right-5 p-2.5 rounded-full bg-background/90 backdrop-blur-md shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <Heart className="h-4 w-4 text-foreground" />
          </span>

          {product.badge && (
            <div className="absolute top-5 left-5 flex flex-col gap-2">
              <span className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase bg-primary text-primary-foreground">
                {product.badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <span className="px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase bg-background/95 backdrop-blur-md text-foreground shadow-lg">
              Ver detalhes
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground/70">
            {product.collection}
          </p>
          <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          <p className="text-sm font-medium text-foreground pt-1">{product.price}</p>
        </div>
      </a>
    </article>
  );
}
