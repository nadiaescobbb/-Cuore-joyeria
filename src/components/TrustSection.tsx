import { useReveal } from '../hooks/use-reveal';
import { Hammer, Clock, Layers, MessageSquare, ShieldCheck } from 'lucide-react';

export function TrustSection() {
  const ref = useReveal();

  const items = [
    {
      icon: <Hammer className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-4 md:mb-5" strokeWidth={1.5} />,
      title: 'Taller propio',
      description: 'Fabricamos y reparamos en nuestro local.'
    },
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-4 md:mb-5" strokeWidth={1.5} />,
      title: 'Más de 40 años',
      description: 'El mismo oficio, en el mismo lugar.'
    },
    {
      icon: <Layers className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-4 md:mb-5" strokeWidth={1.5} />,
      title: 'Mayor variedad',
      description: 'Más de 30 marcas, stock que se renueva.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-4 md:mb-5" strokeWidth={1.5} />,
      title: 'Asesoramiento real',
      description: 'Te ayudamos a elegir sin apuro.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-foreground mb-4 md:mb-5" strokeWidth={1.5} />,
      title: 'Garantía real',
      description: 'Oro, plata y platino con respaldo propio.'
    }
  ];

  return (
    <section id="trust" className="bg-surface relative" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-5 py-group md:px-20 text-center">
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-none text-foreground mb-12 lg:mb-20">
          Por qué elegir Cuore.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-8 items-start text-center">
          {items.map((item, index) => (
            <div key={index} className={`flex flex-col items-center px-2 md:px-0 ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
              {item.icon}
              <h3 className="font-heading text-lg md:text-2xl font-normal text-foreground mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="font-body text-xs md:text-base text-tierra">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

