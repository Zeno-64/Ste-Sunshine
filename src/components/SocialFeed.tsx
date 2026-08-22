import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { socialImages } from "@/data/catalog";
import { site } from "@/lib/site";

export function SocialFeed() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-full">
        <Reveal className="text-center mb-12">
          <p className="text-eyebrow text-primary mb-3">Siga a gente</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {site.instagramHandle}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Entre para a comunidade e inspire-se com ambientes selecionados e
            bastidores do processo.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {socialImages.map((image, index) => (
            <Reveal key={image} direction="scale" delay={index * 0.06} duration={0.6}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-square overflow-hidden group"
              >
                <img
                  src={image}
                  alt={"Publicação " + (index + 1) + " no Instagram"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
