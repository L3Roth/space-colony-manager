export interface Colonist {
  id: string;
  name: string;
  job: string;
  morale: number;
}

export interface ColonistsState {
  colonists: Colonist[];
}

export const initialColonistsState: ColonistsState = {
  colonists: [],
}
