
export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  waMessage: string;
}

export const categories: Category[] = [
  {
    id: 'anillos',
    name: 'Anillos',
    image: '/cat-anillos.avif',
    description: 'En oro 18kt - Plata con Oro - Plata 925. Variedad de modelos para dama y caballero',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1783222065/cat_collares_rw1nay.jpg',
    description: 'Gargantillas y cadenas. Variedad de modelos en todas las medidas',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'pulseras',
    name: 'Pulseras',
    image: '/cat-pulseras.avif',
    description: 'Diseños clásicos y contemporáneos en oro y plata.',
    waMessage: 'Hola Cuore, quería ver pulseras'
  },
  {
    id: 'aros',
    name: 'Aros',
    image: '/cat-aros.avif',
    description: 'Argollas, abridores y colgantes en oro 18kt y plata 925.',
    waMessage: 'Hola Cuore, quería ver aros'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    image: '/cat_relojes.png', // Fallback local ya que no se proveyó de Cloudinary
    description: '',
    waMessage: 'Hola Cuore, quería consultar por relojes'
  }
];
