import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { addEvent } from '@space-economy-manager/events';
import { increaseResource, decreaseResource } from '@space-economy-manager/resources';
import { addColonist, updateMorale, ColonistsState } from '@space-economy-manager/colonists';

interface AppState {
  colonists: ColonistsState;
}

@Injectable({
  providedIn: 'root',
})
export class GameEventsService {
  private eventTypes = [
    { description: 'Meteoriten-Einschlag', impact: 'energy', amount: -10 },
    { description: 'Wasserquelle entdeckt', impact: 'water', amount: 15 },
    { description: 'Ernteausfall', impact: 'food', amount: -20 },
    { description: 'Solarenergie-Upgrade', impact: 'energy', amount: 10 },
    { description: 'Neuer Kolonist angekommen', impact: 'colonist', amount: 1 },
    { description: 'Moral der Kolonisten gesunken', impact: 'morale', amount: -5 },
  ];

  constructor(private store: Store<AppState>) {}

  startEventStream() {
    interval(10000) // Every 10 seconds, trigger an event
      .pipe(
        map(() => {
          const randomEvent = this.eventTypes[Math.floor(Math.random() * this.eventTypes.length)];
          return {
            id: crypto.randomUUID(),
            description: randomEvent.description,
            impact: randomEvent.impact.trim().toLowerCase() as 'food' | 'water' | 'energy' | 'colonist' | 'morale',
            amount: randomEvent.amount,
          };
        })
      )
      .subscribe((gameEvent) => {
        console.log('📢 New Event:', gameEvent);

        // Store event in the NgRx Events Store
        this.store.dispatch(addEvent({ event: gameEvent }));

        // Handle Colonist Events
        if (gameEvent.impact === 'colonist') {
          console.log('🧑‍🚀 Neuen Kolonisten hinzufügen:', gameEvent);

          const newColonist = {
            id: crypto.randomUUID(),
            name: `Kolonist ${Math.floor(Math.random() * 1000)}`,
            job: 'Worker',
            morale: 100,
          };

          console.log('🧑‍🚀 New Colonist Data:', newColonist);

          this.store.dispatch(addColonist({ colonist: newColonist }));
        }

        // Handle Morale Events
        else if (gameEvent.impact === 'morale') {
          console.log('💔 Morale Event:', gameEvent);

          this.store.select(state => state.colonists.colonists).subscribe(colonists => {
            colonists.forEach(colonist => {
              this.store.dispatch(updateMorale({
                colonistId: colonist.id,
                morale: Math.max(0, colonist.morale + gameEvent.amount) // Prevent negative morale
              }));
            });
          });
        }

        // Handle Resource Events
        else {
          console.log('🔄 Resource Update Event:', gameEvent);

          if (gameEvent.amount > 0) {
            this.store.dispatch(increaseResource({ resource: gameEvent.impact, amount: gameEvent.amount }));
          } else {
            this.store.dispatch(decreaseResource({ resource: gameEvent.impact, amount: Math.abs(gameEvent.amount) }));
          }
        }
      });
  }

}
