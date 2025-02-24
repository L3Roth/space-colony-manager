import { createAction, props } from '@ngrx/store';
import { Colonist } from './colonists.state';

export const addColonist = createAction(
  '[Colonists] Add Colonist',
  props<{ colonist: Colonist }>()
)

export const updateMorale = createAction(
  '[Colonists] Update Morale',
  props<{ colonistId: string, morale: number }>()
)
