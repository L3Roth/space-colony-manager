import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { addEvent } from "@space-economy-manager/events";
import { interval, map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class GameEventsService {
  private eventTypes = [
    {description: 'Meteoriten-Einschlag', impact: 'energy'},
    {description: 'Wasserquelle entdeckt', impact: 'water'},
    {description: 'Ernteausfall', impact: 'food'},
    {description: 'Neuer Kolonist angekommen', impact: 'colonist'},
  ];

  constructor(private store: Store) {}

  startEventStream() {
    interval(10000) //all 10 seconds an event occurs
      .pipe(
        map(() => {
          const randomEvent = this.eventTypes[Math.floor(Math.random() * this.eventTypes.length)];
          return {
            id: crypto.randomUUID(),
            description: randomEvent.description,
            impact: randomEvent.impact
          };
        })
      ).subscribe((gameEvent) => {
        this.store.dispatch(addEvent({ event: gameEvent }));
        console.log("New Event: ", gameEvent);
      })
  }
}
