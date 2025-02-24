export interface GameEvent {
  id: string;
  description: string;
  impact: string;
}

export interface EventsState {
  events: GameEvent[];
}

export const initialEventState: EventsState = {
  events: [],
}
