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
