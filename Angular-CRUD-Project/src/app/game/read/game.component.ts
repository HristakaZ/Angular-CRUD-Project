import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game-studio/services/game.service';
import { Game } from '../game.model';

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, AfterViewInit {
    public games!: Game[];
    public columnsToDisplay = ['name', 'dateOfCreation', 'dateOfPremiere', 'isAvailable', 'gameStudio', 'updateButton', 'deleteButton'];
    constructor(private gameService: GameService) {

    }

    ngOnInit(): void {
      this.gameService.getAll().subscribe((games) => {
        this.games = games;
      });
    }
    
    ngAfterViewInit(): void {
      this.gameService.getAll().subscribe((games) => {
        this.games = games;
      });
    }
}
