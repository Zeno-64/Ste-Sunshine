import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { linkProps, site } from "@/lib/site";

export function AboutBlock() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-linen">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="text-eyebrow text-primary mb-6">Sobre nós</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.3] mb-8">
            Acreditamos na beleza do viver devagar — em objetos feitos com cuidado,
            materiais que envelhecem bem e espaços que convidam à{" "}
            <span className="italic">pausa</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Cada peça da coleção é escolhida pela integridade do material, pela
            história de quem a fez e pela capacidade de durar bonita. Trabalhamos
            com artesãos que compartilham nosso compromisso com o ofício e a
            sustentabilidade.
          </p>
          <ButtonLink variant="outline" {...linkProps(site.links.shopAll)}>
            Nossa história
            <ArrowRight className="ml-3 h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
