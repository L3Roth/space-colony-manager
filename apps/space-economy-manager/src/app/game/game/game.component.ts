import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  standalone: true, // 🚀 Wichtig für Standalone Components!
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.startGame();
  }
}
