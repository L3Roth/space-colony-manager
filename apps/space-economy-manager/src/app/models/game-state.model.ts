export interface GameState {
  ressources: {
    food: number,
    water: number,
    energy: number
  };
  buildings: Building[];
  colonists: Colonist[];
}

export interface Building {
  id: string,
  type: string,
  level: number
}

export interface Colonist {
  id: string,
  name: string,
  job: string,
  morale: number
}
