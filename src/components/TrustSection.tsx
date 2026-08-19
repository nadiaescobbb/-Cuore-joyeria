
export function TrustSection() {
  const items = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#B89B5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3L17.7 9.3M15 15l6 6M9 9l-6-6M9 15l-6 6M15 9l6-6M5.5 3.5L8.5 6.5M17.5 15.5L20.5 18.5" />
        </svg>
      ),
      title: 'TALLER PROPIO',
      description: 'Fabricamos y reparamos cada pieza acá, en Río Grande.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#B89B5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L21 12L12 21L3 12Z" />
        </svg>
      ),
      title: 'MÁS DE 40 AÑOS',
      description: 'Trabajamos todos los días en Tierra del Fuego.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#B89B5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      ),
      title: 'MAYOR VARIEDAD',
      description: 'Más de 30 marcas, stock que se renueva.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#B89B5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      ),
      title: 'ATENCIÓN SIN APURO',
      description: 'Nos dedicamos tiempo para que elijas y decidas.'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#B89B5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L20 7V13C20 17.4 16.6 20.8 12 22C7.4 20.8 4 17.4 4 13V7L12 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8L16 12L12 16L8 12Z" />
        </svg>
      ),
      title: 'GARANTÍA PROPIA',
      description: 'Respondemos nosotros mismos por cada pieza que reparamos o fabricamos.'
    }
  ];

  return (
    <section id="trust" className="bg-background relative pt-section pb-section">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 text-center">
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground mb-12 lg:mb-16">
          Por qué elegir Cuore.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 items-start text-center">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-2 ${index === items.length - 1 ? 'col-span-2 md:col-span-1 max-w-[220px] md:max-w-none mx-auto' : ''}`}
            >
              <div className="mb-4 flex items-center justify-center h-8">
                {item.icon}
              </div>
              <h3 className="font-body text-xs font-bold tracking-[0.20em] uppercase text-tierra/80 mb-2">
                {item.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-tierra/90 max-w-[200px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

