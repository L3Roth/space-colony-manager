import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EventsState } from "./events.state";

export const selectEventsState = createFeatureSelector<EventsState>('events');

export const selectAllEvents = createSelector(selectEventsState, state => state.events);
