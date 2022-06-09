import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.service';
import { GameService } from '../../game/services/game.service';

@Component({
  selector: 'game-studio-component',
  templateUrl: './game-studio.component.html',
  styleUrls: ['./game-studio.component.css']
})

export class GameStudioComponent implements OnInit, AfterViewInit {
    public gameStudios: GameStudio[] = [];
    public columnsToDisplay = ['name', 'dateOfEstablishment', 'mainOffice', 'games', 'updateButton', 'deleteButton'];
    constructor(private gameStudioService: GameStudioService, private gameService: GameService) {

    }

    ngOnInit(): void {
      this.gameStudioService.$getAll().subscribe((gameStudios) => {
        this.gameStudios = gameStudios;
        this.gameStudios.forEach(gameStudio => {
          this.gameService.$getAll().subscribe(games => {
            gameStudio.games = games.filter(game => game.gameStudio.id === gameStudio.id);
          });
        });
      });
    }
    
    ngAfterViewInit(): void {
      this.gameStudioService.$getAll().subscribe((gameStudios) => {
        this.gameStudios = gameStudios;
        this.gameStudios.forEach(gameStudio => {
          this.gameService.$getAll().subscribe(games => {
            gameStudio.games = games.filter(game => game.gameStudio.id === gameStudio.id);
          });
        });
      });
    }
}
