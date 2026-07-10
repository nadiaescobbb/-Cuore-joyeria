
import { Fire, SealCheck, Sparkle, ChatCircle, ShieldCheck } from '@phosphor-icons/react';

export function TrustSection() {

  const items = [
    {
      icon: <Fire className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Taller propio',
      description: 'Fabricamos y reparamos en nuestro local.'
    },
    {
      icon: <SealCheck className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Más de 40 años',
      description: 'El mismo oficio, en el mismo lugar.'
    },
    {
      icon: <Sparkle className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Mayor variedad',
      description: 'Más de 30 marcas, stock que se renueva.'
    },
    {
      icon: <ChatCircle className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Asesoramiento real',
      description: 'Te ayudamos a elegir sin apuro.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Garantía real',
      description: 'Oro, plata y platino con respaldo propio.'
    }
  ];

  return (
    <section id="trust" className="bg-background relative">
      <div className="max-w-[1440px] mx-auto px-5 pt-group md:px-20 text-center">
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-none text-foreground mb-12 lg:mb-20">
          Por qué elegir Cuore.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-group md:gap-y-item items-start text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-2 md:px-0">
              {item.icon}
              <h3 className="font-heading text-xl md:text-2xl font-normal text-foreground mb-item">
                {item.title}
              </h3>
              <p className="font-body text-sm md:text-base text-tierra">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

