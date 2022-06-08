import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from 'src/app/game-studio/game-studio.model';
import { GameStudioService } from 'src/app/game-studio/services/game-studio.service';
import { GameService } from 'src/app/game-studio/services/game.service';
import { Game } from '../game.model';

@Component({
  selector: 'create-game-component',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})

export class CreateGameComponent implements OnInit {
    createGameForm!: FormGroup;
    gameStudios!: GameStudio[];

    constructor(private gameService: GameService, private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        this.createGameForm = new FormGroup({
            name: new FormControl(''),
            dateOfCreation: new FormControl(''),
            dateOfPremiere: new FormControl(''),
            isAvailable: new FormControl(''),
            gameStudio: new FormControl('')
        });
        this.gameStudioService.getAll().subscribe((gameStudios) => {
            this.gameStudios = gameStudios;
        });
    }
    
    createGame(): void {
        debugger;
        let game: Game = new Game();
        game.name = this.createGameForm.value.name;
        game.dateOfCreation = this.createGameForm.value.dateOfCreation;
        game.dateOfPremiere = this.createGameForm.value.dateOfPremiere;
        game.isAvailable = this.createGameForm.value.isAvailable;
        game.gameStudio = this.gameStudios.find(x => x.id === this.createGameForm.value.gameStudio)!;
        this.gameService.create(game).subscribe(() => {
            this.router.navigateByUrl('games');
        });
    }
}
