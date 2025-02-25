export interface GameEvent {
  id: string;
  description: string;
  impact: 'food' | 'water' | 'energy' | 'colonist' | 'morale';
  amount: number;
}

export interface EventsState {
  events: GameEvent[];
}

export const initialEventState: EventsState = {
  events: [],
}
