import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { steps } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";

/**
 * Substitui a antiga vitrine "Novidades" com preço.
 * Ímã personalizado é sob encomenda: o que o cliente precisa saber é o caminho
 * até receber a peça, não uma tabela de preços.
 */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-linen">
      <div className="container-full">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-eyebrow text-primary mb-3">Simples assim</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Como funciona
            </h2>
          </div>
          <a
            {...linkProps(site.links.quote)}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-300 group"
          >
            Pedir orçamento
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1}>
              <article className="h-full bg-background border border-border p-8">
                <p className="font-serif text-5xl text-rose mb-6 leading-none">
                  {item.step}
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
