import { createReducer, on } from "@ngrx/store";
import { initialColonistsState } from "./colonists.state";
import { addColonist, updateMorale } from "./colonists.actions";

export const colonistsReducer = createReducer(
  initialColonistsState,

  on(addColonist, (state, { colonist }) => {
    console.log('🧑‍🚀 Reducer: Colonist added', colonist);
    return {
      ...state,
      colonists: [...state.colonists, colonist],
    };
  }),

  on(updateMorale, (state, { colonistId, morale }) => ({
    ...state,
    colonists: state.colonists.map(colonist =>
      colonist.id === colonistId ? { ...colonist, morale } : colonist
    ),
  }))
);

