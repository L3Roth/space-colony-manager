import { createAction, props } from '@ngrx/store';
import { GameEvent } from './events.state';

export const addEvent = createAction(
  '[Events] Add Event',
  props<{ event: GameEvent }>()
)
