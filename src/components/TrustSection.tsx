
export function TrustSection() {
  return (
    <section id="trust" className="bg-background relative pt-12 pb-12 lg:pt-16 lg:pb-16">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20">
        
        {/* Encabezado de Sección */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground text-center mb-10 lg:mb-14">
          Por qué elegir Cuore.
        </h2>

        {/* Muestrario Grid (6 columnas en desktop, 1 columna en mobile, items-stretch) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 w-full items-stretch">
          
          {/* Bloque 1: Taller propio (Col 1-3, Fila 1) - Ochre / Accent Gold */}
          <div className="md:col-span-3 bg-[#87602F] text-[#FAF8F3] p-[28px] rounded-[3px] flex flex-col justify-end h-full min-h-[220px] md:min-h-[260px]">
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-[#D8C79F]">
              Taller propio
            </span>
            <h3 className="font-heading text-[24px] md:text-[28px] font-medium leading-tight text-[#FAF8F3] my-2">
              "Cada pieza se hace acá."
            </h3>
            <p className="font-body text-[14px] leading-relaxed text-[#FAF8F3]/90">
              Fabricamos y reparamos cada pieza acá, en Río Grande.
            </p>
          </div>

          {/* Bloque 2: Más de 40 años (Col 4-6, Fila 1) - Dark / Ink */}
          <div className="md:col-span-3 bg-[#1F1A15] text-[#FAF8F3] p-[28px] rounded-[3px] flex flex-col justify-end h-full min-h-[220px] md:min-h-[260px]">
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-[#D8C79F]">
              Más de 40 años
            </span>
            <h3 className="font-heading text-[24px] md:text-[28px] font-medium leading-tight text-[#FAF8F3] my-2">
              "Todos los días, en Tierra del Fuego."
            </h3>
            <p className="font-body text-[14px] leading-relaxed text-[#FAF8F3]/90">
              Trabajamos todos los días en Tierra del Fuego.
            </p>
          </div>

          {/* Bloque 3: Mayor variedad (Col 1-2, Fila 2) - Silver Gray */}
          <div className="md:col-span-2 bg-[#D8D5D0] text-[#211D19] p-[28px] rounded-[3px] flex flex-col justify-end h-full min-h-[220px] md:min-h-[260px]">
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-[#6F4B24]">
              Mayor variedad
            </span>
            <h3 className="font-heading text-[24px] md:text-[28px] font-medium leading-tight text-[#211D19] my-2">
              "Más de 30 marcas."
            </h3>
            <p className="font-body text-[14px] leading-relaxed text-[#211D19]/85">
              Más de 30 marcas, stock que se renueva.
            </p>
          </div>

          {/* Bloque 4: Atención sin apuro (Col 3-4, Fila 2) - Saturated Warm Beige + Border */}
          <div className="md:col-span-2 bg-[#E4DCD0] text-[#211D19] border border-[#211D19]/18 p-[28px] rounded-[3px] flex flex-col justify-end h-full min-h-[220px] md:min-h-[260px]">
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-[#6F4B24]">
              Atención sin apuro
            </span>
            <h3 className="font-heading text-[24px] md:text-[28px] font-medium leading-tight text-[#211D19] my-2">
              "Tiempo para que decidas."
            </h3>
            <p className="font-body text-[14px] leading-relaxed text-[#211D19]/85">
              Nos dedicamos a que elijas y decidas.
            </p>
          </div>

          {/* Bloque 5: Garantía propia (Col 5-6, Fila 2) - Dark Chocolate CTA */}
          <div className="md:col-span-2 bg-[#4A3219] text-[#FAF8F3] p-[28px] rounded-[3px] flex flex-col justify-end h-full min-h-[220px] md:min-h-[260px]">
            <span className="font-mono text-[12px] tracking-[0.16em] uppercase text-[#D8C79F]">
              Garantía propia
            </span>
            <h3 className="font-heading text-[24px] md:text-[28px] font-medium leading-tight text-[#FAF8F3] my-2">
              "Respondemos nosotros."
            </h3>
            <p className="font-body text-[14px] leading-relaxed text-[#FAF8F3]/90">
              Respondemos nosotros mismos por cada pieza que reparamos o fabricamos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

