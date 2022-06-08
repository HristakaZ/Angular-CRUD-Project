import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.services';

@Component({
  selector: 'game-studio-component',
  templateUrl: './game-studio.component.html',
  styleUrls: ['./game-studio.component.css']
})

export class GameStudioComponent implements OnInit, AfterViewInit {
    public gameStudios!: GameStudio[];
    public columnsToDisplay = ['name', 'dateOfEstablishment', 'mainOffice', 'games', 'updateButton', 'deleteButton'];
    constructor(private gameStudioService: GameStudioService) {

    }

    ngOnInit(): void {
      this.gameStudioService.getAll().subscribe((gameStudios) => {
        this.gameStudios = gameStudios;
      });
    }
    
    ngAfterViewInit(): void {
      this.gameStudioService.getAll().subscribe((gameStudios) => {
        this.gameStudios = gameStudios;
      });
    }
}
