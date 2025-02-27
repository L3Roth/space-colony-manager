export interface Building {
  id: string;
  type: string;
  level: number;
  requiredColonists: number;
  isActive: boolean;
}

export interface BuildingsState {
  buildings: Building[];
}

export const initialBuildingsState: BuildingsState = {
  buildings: [],
}

export const avaiableBuildings: Omit<Building, 'id' | 'level' | 'isActive'>[] = [
  { type: 'Farm', requiredColonists: 2 },
  { type: 'Solar Plant', requiredColonists: 1 },
  { type: 'Water Pump', requiredColonists: 3 },
  { type: 'Habitat', requiredColonists: 0 },
]
