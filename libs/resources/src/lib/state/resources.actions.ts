import { createAction, props } from '@ngrx/store';
import { ResourcesState } from './resources.state';

export const increaseResource = createAction(
  '[Resources] Increase Resource',
  props<{ resource: keyof ResourcesState; amount: number }>()
);

export const decreaseResource = createAction(
  '[Resources] Decrease Resource',
  props<{ resource: keyof ResourcesState; amount: number }>()
);
