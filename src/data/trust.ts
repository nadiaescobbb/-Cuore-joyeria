export interface TrustPoint {
  id: string;
  title: string;
  description: string;
}

export const trustPoints: TrustPoint[] = [
  {
    id: 'taller',
    title: 'Taller propio',
    description: 'Fabricamos y reparamos en el local. Lo que dejás con nosotros no sale de nuestras manos.'
  },
  {
    id: 'experiencia',
    title: 'Más de 40 años',
    description: 'Cuore nació en Río Grande. Seguimos acá porque hacemos bien nuestro trabajo.'
  },
  {
    id: 'variedad',
    title: 'Una de las joyerías más grandes de la provincia',
    description: 'Más de 30 marcas de relojes. Stock con renovación permanente. Variedad real para elegir.'
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento real',
    description: 'Contanos qué necesitás. Te ayudamos a elegir sin apuro y sin presión.'
  }
];
