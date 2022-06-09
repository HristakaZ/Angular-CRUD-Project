import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from 'src/app/game-studio/game-studio.model';
import { GameStudioService } from 'src/app/game-studio/services/game-studio.service';
import { GameService } from 'src/app/game/services/game.service';
import { Game } from '../game.model';

@Component({
  selector: 'update-game-component',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})

export class UpdateGameComponent implements OnInit {
    updateGameForm!: FormGroup;
    game: Game = new Game();
    gameStudios: GameStudio[] = [];
    isIdInputHidden: boolean = true;

    constructor(private gameService: GameService, private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        let id: number = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
        this.updateGameForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl(''),
            dateOfCreation: new FormControl(''),
            dateOfPremiere: new FormControl(''),
            isAvailable: new FormControl(''),
            gameStudio: new FormControl('')
        });
        
        this.gameService.$getById(id).subscribe(x => {
            this.game = x;
            this.updateGameForm.setValue({
                id: this.game.id,
                name: this.game.name,
                dateOfCreation: this.game.dateOfCreation,
                dateOfPremiere: this.game.dateOfPremiere,
                isAvailable: this.game.isAvailable,
                gameStudio: this.game.gameStudio.id
            });
        });

        this.gameStudioService.$getAll().subscribe(gameStudios => {
            this.gameStudios = gameStudios;
        });
    }
    
    updateGame(): void {
        this.game.id = this.updateGameForm.value.id;
        this.game.name = this.updateGameForm.value.name;
        this.game.dateOfCreation = this.updateGameForm.value.dateOfCreation;
        this.game.dateOfPremiere = this.updateGameForm.value.dateOfPremiere;
        this.game.isAvailable = this.updateGameForm.value.isAvailable;
        this.game.gameStudio = this.gameStudios.find(x => x.id === this.updateGameForm.value.gameStudio)!;
        this.gameService.$update(this.game).subscribe(x => {
            this.router.navigateByUrl('games');
        });
    }
}
