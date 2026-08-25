import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { ownerImage } from "@/data/catalog";
import { linkProps, site } from "@/lib/site";

/** Substitui o antigo bloco "Coleção em destaque": aqui quem aparece é a dona da marca. */
export function OwnerStory() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      {/* overflow-hidden contém o deslocamento lateral do reveal e evita scroll horizontal no mobile */}
      <div className="container-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal direction="left" className="relative aspect-[4/5] overflow-hidden group">
            <img
              src={ownerImage}
              alt="Stephani Silva, fundadora da Ste Sunshine"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </Reveal>

          <Reveal direction="right" className="md:py-12">
            <p className="text-eyebrow text-primary mb-4">Quem faz</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-[1.1]">
              Um sonho que começou no coração e ganhou forma em{" "}
              <span className="italic">cada detalhe</span>.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-md mb-8">
              <p>
                Meu nome é {site.owner}, tenho 27 anos e sou apaixonada por três
                coisas: viajar, a cor rosa e empreender. Foi unindo essas paixões
                que nasceu o meu empreendimento de ímãs de geladeira
                personalizados — um projeto que representa muito mais do que um
                produto: representa a realização de um sonho.
              </p>
              <p>
                Sempre acreditei que os momentos especiais merecem ser lembrados.
                Uma viagem inesquecível, uma conquista, uma data importante, um
                lugar que marcou a nossa história ou simplesmente aquela lembrança
                que faz o coração sorrir.
              </p>
              <p>
                Para mim, empreender sempre foi um sonho. Hoje, poder transformar
                uma ideia em realidade, colocar amor em cada criação e compartilhar
                esse trabalho com outras pessoas é uma conquista enorme.
              </p>
            </div>
            <ButtonLink variant="outline" {...linkProps(site.links.whatsapp)}>
              Falar com a Stephani
              <ArrowRight className="ml-3 h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
