import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BuildingsState } from "./buildings.state";

export const selectBuildingsState = createFeatureSelector<BuildingsState>('buildings');

export const selectAllBuildings = createSelector(selectBuildingsState, state => state.buildings);
