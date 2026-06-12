export interface TrustPoint {
  id: string;
  title: string;
  description: string;
}

export const trustPoints: TrustPoint[] = [
  {
    id: 'taller',
    title: 'Taller propio',
    description: 'Fabricamos y reparamos en el local.'
  },
  {
    id: 'experiencia',
    title: 'Más de 40 años',
    description: 'Cuore nació en Río Grande.'
  },
  {
    id: 'variedad',
    title: 'Una de las joyerías más grandes de la provincia',
    description: 'Más de 30 marcas de relojes. Stock con renovación permanente. Variedad real para elegir.'
  },
  {
    id: 'asesoramiento',
    title: 'Asesoramiento real',
    description: 'Contanos qué necesitás. Te ayudamos a elegir sin apuro.'
  }
];
