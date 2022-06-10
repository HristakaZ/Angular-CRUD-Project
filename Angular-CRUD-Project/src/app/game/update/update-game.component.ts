import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

    get name(): AbstractControl {
        return this.updateGameForm.get('name')!;
    }
    get dateOfCreation(): AbstractControl {
        return this.updateGameForm.get('dateOfCreation')!;
    }
    get dateOfPremiere(): AbstractControl {
        return this.updateGameForm.get('dateOfPremiere')!;
    }
    get isAvailable(): AbstractControl {
        return this.updateGameForm.get('isAvailable')!;
    }
    get gameStudio(): AbstractControl {
        return this.updateGameForm.get('gameStudio')!;
    }

    constructor(private gameService: GameService, private gameStudioService: GameStudioService, private router: Router,
        private updateGameSnackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        let id: number = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
        this.updateGameForm = new FormGroup({
            id: new FormControl(''),
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
        debugger;
        if (!this.updateGameForm.invalid) {
            this.game.id = this.updateGameForm.value.id;
            this.game.name = this.updateGameForm.value.name;
            this.game.dateOfCreation = this.updateGameForm.value.dateOfCreation;
            this.game.dateOfPremiere = this.updateGameForm.value.dateOfPremiere;
            this.game.isAvailable = this.updateGameForm.value.isAvailable;
            this.game.gameStudio = this.gameStudios.find(x => x.id === this.updateGameForm.value.gameStudio)!;
            this.gameService.$update(this.game).subscribe(x => {
                this.updateGameSnackBar.open('Game was successfully updated!', 'X', {
                    duration: 3000
                });
                this.router.navigateByUrl('games');
            });
        }
        else {
            this.updateGameSnackBar.open('There were validation errors while updating the game!', 'X', {
                duration: 3000
            });
        }
    }
}
