import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Store } from '@ngrx/store';
import { selectFood, selectWater, selectEnergy, ResourcesState } from '@space-economy-manager/resources';
import { BuildingsState, selectAllBuildings } from '@space-economy-manager/buildings';
import { EventsState, selectAllEvents } from '@space-economy-manager/events';
import { ColonistsState, selectAllColonists } from '@space-economy-manager/colonists';
import { GameEventsService } from '../../services/game-events.service';
import { BuildingSelectionComponent } from '../building-selection/building-selection.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, BuildingSelectionComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent implements OnInit {
  food$;
  water$;
  energy$;

  buildings$;

  events$;

  colonists$;

  constructor(
    private gameService: GameService,
    private gameEventService: GameEventsService,
    private resourcesStore: Store<ResourcesState>,
    private buildingsStore: Store<BuildingsState>,
    private eventStore: Store<EventsState>,
    private colonistsStore: Store<ColonistsState>
  ) {
    this.food$ = this.resourcesStore.select(selectFood);
    this.water$ = this.resourcesStore.select(selectWater);
    this.energy$ = this.resourcesStore.select(selectEnergy);

    this.buildings$ = this.buildingsStore.select(selectAllBuildings);

    this.events$ = this.eventStore.select(selectAllEvents);

    this.colonists$ = this.colonistsStore.select(selectAllColonists);
  }

  ngOnInit(): void {
    this.gameService.startGame();
    this.gameEventService.startEventStream();
  }
}
