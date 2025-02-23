export interface ResourcesState {
  food: number;
  water: number;
  energy: number;
}

export const initialResourcesState: ResourcesState = {
  food: 100,
  water: 100,
  energy: 50,
};
