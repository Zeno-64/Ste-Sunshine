import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { linkProps, site } from "@/lib/site";

/** Antigo "Sobre nós" do template — agora carrega a missão da marca. */
export function MissionBlock() {
  return (
    <section id="missao" className="py-24 md:py-32 bg-rose text-white">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="text-eyebrow text-white/70 mb-6">Nossa missão</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.3] mb-8">
            Criar ímãs personalizados únicos, delicados e cheios de significado,
            transformando fotos, lugares e momentos especiais em lembranças que{" "}
            <span className="italic">permanecem</span>.
          </h2>
          <p className="text-white/85 leading-relaxed max-w-2xl mx-auto mb-4">
            Cada ímã é personalizado com carinho e pensado para tornar uma
            lembrança ainda mais especial. Peças que contam uma história e trazem
            aquela sensação gostosa de reviver um momento toda vez que você olha
            para a geladeira.
          </p>
          <p className="font-script text-3xl md:text-4xl text-white mb-10">
            Seja bem-vindo(a) ao meu sonho
          </p>
          <ButtonLink variant="light" {...linkProps(site.links.whatsapp)}>
            <MessageCircle className="mr-3 h-4 w-4" />
            Contar minha história
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
