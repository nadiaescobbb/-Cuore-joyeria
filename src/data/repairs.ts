export interface RepairService {
  id: string;
  name: string;
}

export const repairServices: RepairService[] = [
  { id: 'joyas', name: 'Reparación de joyas' },
  { id: 'pilas', name: 'Cambios de pilas, mallas y cristales' },
  { id: 'grabado', name: 'Grabado láser' }
];
