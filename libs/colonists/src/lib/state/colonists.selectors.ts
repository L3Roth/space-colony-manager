import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ColonistsState } from "./colonists.state";

export const selectColonistsState = createFeatureSelector<ColonistsState>('colonists');

export const selectAllColonists = createSelector(
  selectColonistsState,
  (state) => {
    console.log('👀 Selector: Colonists State:', state.colonists);
    return state.colonists;
  }
);
