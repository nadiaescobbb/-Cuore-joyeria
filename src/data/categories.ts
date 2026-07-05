import { getImageUrl } from '../utils/image';

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
    image: getImageUrl('/cat_anillos_hwizp6.jpg'),
    description: '',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: getImageUrl('/cat_collares_rw1nay.jpg'),
    description: '',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'pulseras',
    name: 'Pulseras',
    image: getImageUrl('/cat_pulseras_c4ffmn.jpg'),
    description: '',
    waMessage: 'Hola Cuore, quería ver pulseras'
  },
  {
    id: 'aros',
    name: 'Aros',
    image: getImageUrl('/cat_aros_vaq2ln.jpg'),
    description: '',
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
