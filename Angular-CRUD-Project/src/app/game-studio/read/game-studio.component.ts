import { Component, OnInit } from '@angular/core';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.services';

@Component({
  selector: 'game-studio-component',
  templateUrl: './game-studio.component.html',
  styleUrls: ['./game-studio.component.css']
})

export class GameStudioComponent implements OnInit {
    public gameStudios!: GameStudio[];
    public columnsToDisplay = ['name', 'dateOfEstablishment', 'mainOffice', 'games'];
    constructor(private gameStudioService: GameStudioService) {

    }

    ngOnInit(): void {
      this.gameStudioService.getAll().subscribe((gameStudios) => {
        this.gameStudios = gameStudios;
        console.log(this.gameStudios);
      });
    }
}
