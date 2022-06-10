import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GameStudioService } from 'src/app/game-studio/services/game-studio.service';
import { GameService } from 'src/app/game/services/game.service';
import { Game } from '../game.model';

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, AfterViewInit {
    public games: Game[] = [];
    public columnsToDisplay = ['name', 'dateOfCreation', 'dateOfPremiere', 'isAvailable', 'gameStudio', 'updateButton', 'deleteButton'];
    readonly relativeGameGreenTickUrl: string = 'assets/isavailable.png';
    readonly relativeGameRedCrossUrl: string = 'assets/isnotavailable.png';
    constructor(private gameService: GameService, private gameStudioService: GameStudioService) {

    }

    ngOnInit(): void {
      this.gameService.$getAll().subscribe((games) => {
        this.games = games;
      });
      this.gameStudioService.$getAll().subscribe((gameStudios) => {
        debugger;
        this.games.forEach((game) => {
          if (!gameStudios.find(gameStudio => gameStudio.id === game.gameStudio.id)) {
            game.gameStudio.name = '';
          }
        });
      });
    }
    
    ngAfterViewInit(): void {
      this.gameService.$getAll().subscribe((games) => {
        this.games = games;
      });
      this.gameStudioService.$getAll().subscribe((gameStudios) => {
        debugger;
        this.games.forEach((game) => {
          if (!gameStudios.find(gameStudio => gameStudio.id === game.gameStudio.id)) {
            game.gameStudio.name = '';
          }
        });
      });
    }
}
