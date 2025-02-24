import { createAction, props } from '@ngrx/store';
import { Building } from './buildings.state';
export const addBuilding = createAction(
  '[Buildings] Add Building',
  props<{ building: Building }>()
);

export const upgradeBuilding = createAction(
  '[Building] Upgrade Building',
  props<{ buildingId: string }>()
)
