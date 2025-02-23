import { createReducer, on } from '@ngrx/store';
import { initialResourcesState } from './resources.state';
import { increaseResource, decreaseResource } from './resources.actions';

export const resourcesReducer = createReducer(
  initialResourcesState,

  on(increaseResource, (state, { resource, amount }) => ({
    ...state,
    [resource]: state[resource] + amount,
  })),

  on(decreaseResource, (state, { resource, amount }) => ({
    ...state,
    [resource]: Math.max(0, state[resource] - amount), // Kein negativer Wert
  }))
);
