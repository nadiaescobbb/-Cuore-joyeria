
import { Fire, SealCheck, Sparkle, ChatCircle, ShieldCheck } from '@phosphor-icons/react';

export function TrustSection() {

  const items = [
    {
      icon: <Fire className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Taller propio',
      description: 'Fabricamos y reparamos cada pieza acá, en Río Grande.'
    },
    {
      icon: <SealCheck className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Más de 40 años',
      description: 'Trabajando todos los días en Tierra del Fuego.'
    },
    {
      icon: <Sparkle className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Mayor variedad',
      description: 'Más de 30 marcas, stock que se renueva.'
    },
    {
      icon: <ChatCircle className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Atención sin apuro',
      description: 'Te dedicamos tiempo para que mires, te pruebes y decidas.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-accent mb-item" weight="thin" />,
      title: 'Garantía propia',
      description: 'Respondemos nosotros mismos por cada pieza que reparamos o fabricamos.'
    }
  ];

  return (
    <section id="trust" className="bg-background relative">
      <div className="max-w-[1440px] mx-auto px-5 pt-group md:px-20 text-center">
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-none text-foreground mb-12 lg:mb-20">
          Por qué elegir Cuore.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-10 lg:gap-item items-start text-center">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center px-1 md:px-0 ${index === items.length - 1 ? 'col-span-2 md:col-span-1 max-w-[220px] md:max-w-none mx-auto' : ''}`}
            >
              {item.icon}
              <h3 className="font-heading text-lg md:text-2xl font-normal text-foreground mb-2 md:mb-item leading-tight">
                {item.title}
              </h3>
              <p className="font-body text-[11px] md:text-base text-tierra leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

