import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from 'src/app/game-studio/game-studio.model';
import { GameStudioService } from 'src/app/game-studio/services/game-studio.service';
import { GameService } from 'src/app/game/services/game.service';
import { Game } from '../game.model';

@Component({
  selector: 'create-game-component',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})

export class CreateGameComponent implements OnInit {
    createGameForm!: FormGroup;
    gameStudios: GameStudio[] = [];
    get name(): AbstractControl {
        return this.createGameForm.get('name')!;
    }
    get dateOfCreation(): AbstractControl {
        return this.createGameForm.get('dateOfCreation')!;
    }
    get dateOfPremiere(): AbstractControl {
        return this.createGameForm.get('dateOfPremiere')!;
    }
    get isAvailable(): AbstractControl {
        return this.createGameForm.get('isAvailable')!;
    }
    get gameStudio(): AbstractControl {
        return this.createGameForm.get('gameStudio')!;
    }

    constructor(private gameService: GameService, private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        this.createGameForm = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
            dateOfCreation: new FormControl('', [
                Validators.required
            ]),
            dateOfPremiere: new FormControl('', [
                Validators.required
            ]),
            isAvailable: new FormControl(''),
            gameStudio: new FormControl('', [
                Validators.required
            ])
        });
        this.gameStudioService.$getAll().subscribe((gameStudios) => {
            this.gameStudios = gameStudios;
        });
    }
    
    createGame(): void {
        debugger;
        if (!this.createGameForm.invalid) {
            let game: Game = new Game();
            game.name = this.createGameForm.value.name;
            game.dateOfCreation = this.createGameForm.value.dateOfCreation;
            game.dateOfPremiere = this.createGameForm.value.dateOfPremiere;
            game.isAvailable = this.createGameForm.value.isAvailable;
            game.gameStudio = this.gameStudios.find(x => x.id === this.createGameForm.value.gameStudio)!;
            this.gameService.$create(game).subscribe(() => {
                this.router.navigateByUrl('games');
            });
        }
    }
}
