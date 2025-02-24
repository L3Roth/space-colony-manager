import { createReducer, on } from "@ngrx/store";
import { initialEventState } from "./events.state";
import { addEvent } from "./events.actions";

export const eventsReducer = createReducer(
  initialEventState,

  on(addEvent, (state, { event }) => ({
    ...state,
    events: [...state.events, event],
  }))
);
