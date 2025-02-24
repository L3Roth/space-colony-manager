export interface Building {
  id: string;
  type: string;
  level: number;
}

export interface BuildingsState {
  buildings: Building[];
}

export const initialBuildingsState: BuildingsState = {
  buildings: [],
}
