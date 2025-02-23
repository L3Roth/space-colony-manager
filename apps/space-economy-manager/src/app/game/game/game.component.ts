import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Store } from '@ngrx/store';
import { selectFood, selectWater, selectEnergy, ResourcesState } from '@space-economy-manager/resources';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent implements OnInit {
  food$;
  water$;
  energy$;

  constructor(private gameService: GameService, private store: Store<ResourcesState>) {
    this.food$ = this.store.select(selectFood);
    this.water$ = this.store.select(selectWater);
    this.energy$ = this.store.select(selectEnergy);
  }

  ngOnInit(): void {
    this.gameService.startGame();
  }
}
