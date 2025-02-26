import { createReducer, on } from "@ngrx/store";
import { initialBuildingsState } from "./buildings.state";
import { addBuilding, updateBuildingStatus, upgradeBuilding } from "./buildings.actions";

export const buildingsReducer = createReducer(
  initialBuildingsState,

  on(addBuilding, (state, { building }) => ({
    ...state,
    buildings: [...state.buildings, {...building, isActive: false}],
  })),

  on(upgradeBuilding, (state, { buildingId }) => ({
    ...state,
    buildings: state.buildings.map(b =>
      b.id === buildingId ? { ...b, level: b.level + 1 } : b
    ),
  })),

  on(updateBuildingStatus, (state, { buildingId, isActive }) => ({
    ...state,
    buildings: state.buildings.map(b =>
      b.id === buildingId ? { ...b, isActive } : b
    ),
  }))
);
