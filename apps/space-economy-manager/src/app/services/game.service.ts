import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GameState } from "../models/game-state.model";

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private initialState: GameState = {
    ressources: {
      food: 100,
      water: 100,
      energy: 50
    },
    buildings: [],
    colonists: []
  };

  private gameStateSubject = new BehaviorSubject<GameState>(this.initialState);
  gameState$ = this.gameStateSubject.asObservable();

  constructor() {}

  startGame() {
    console.log('Game started');
  }

  updateGameState(newState: GameState) {
    this.gameStateSubject.next(newState);
  }
}
