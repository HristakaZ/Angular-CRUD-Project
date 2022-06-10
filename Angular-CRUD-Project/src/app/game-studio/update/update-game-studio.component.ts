import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.service';

@Component({
  selector: 'update-game-studio-component',
  templateUrl: './update-game-studio.component.html',
  styleUrls: ['./update-game-studio.component.css']
})

export class UpdateGameStudioComponent implements OnInit {
    updateGameStudioForm!: FormGroup;
    gameStudio: GameStudio = new GameStudio();
    isIdInputHidden: boolean = true;
    get name(): AbstractControl {
        return this.updateGameStudioForm.get('name')!;
    }
    get dateOfEstablishment(): AbstractControl {
        return this.updateGameStudioForm.get('dateOfEstablishment')!;
    }
    get mainOffice(): AbstractControl {
        return this.updateGameStudioForm.get('mainOffice')!;
    }

    constructor(private gameStudioService: GameStudioService, private router: Router, private updateGameStudioSnackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        let id: number = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
        this.updateGameStudioForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl('', [
                Validators.required
            ]),
            dateOfEstablishment: new FormControl('', [
                Validators.required
            ]),
            mainOffice: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ])
        });
        
        this.gameStudioService.$getById(id).subscribe(x => {
            this.gameStudio = x;    
            this.updateGameStudioForm.setValue({
                id: this.gameStudio.id,
                name: this.gameStudio.name,
                dateOfEstablishment: this.gameStudio.dateOfEstablishment,
                mainOffice: this.gameStudio.mainOffice
            });
        });
    }
    
    updateGameStudio(): void {
        debugger;
        if(!this.updateGameStudioForm.invalid) {
            this.gameStudio.id = this.updateGameStudioForm.value.id;
            this.gameStudio.name = this.updateGameStudioForm.value.name;
            this.gameStudio.dateOfEstablishment = this.updateGameStudioForm.value.dateOfEstablishment;
            this.gameStudio.mainOffice = this.updateGameStudioForm.value.mainOffice;
            this.gameStudioService.$update(this.gameStudio).subscribe(x => {
                this.updateGameStudioSnackBar.open('Game studio was successfully updated!', 'X', {
                    duration: 3000
                });
                this.router.navigateByUrl('game-studios');
            });
        }
        else {
            this.updateGameStudioSnackBar.open('There were validation errors while updating the game studio!', 'X', {
                duration: 3000
            });
        }
    }
}
