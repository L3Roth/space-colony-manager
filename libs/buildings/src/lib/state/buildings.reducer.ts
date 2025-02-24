import { createReducer, on } from "@ngrx/store";
import { initialBuildingsState } from "./buildings.state";
import { addBuilding, upgradeBuilding } from "./buildings.actions";

export const buildingsReducer = createReducer(
  initialBuildingsState,

  on(addBuilding, (state, { building }) => ({
    ...state,
    buildings: [...state.buildings, building],
  })),

  on(upgradeBuilding, (state, { buildingId }) => ({
    ...state,
    buildings: state.buildings.map(b =>
      b.id === buildingId ? { ...b, level: b.level + 1 } : b
    ),
  }))
);
