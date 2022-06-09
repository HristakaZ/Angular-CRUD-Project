import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.service';

@Component({
  selector: 'create-game-studio-component',
  templateUrl: './create-game-studio.component.html',
  styleUrls: ['./create-game-studio.component.css']
})

export class CreateGameStudioComponent implements OnInit {
    createGameStudioForm!: FormGroup;
    get name(): AbstractControl {
        return this.createGameStudioForm.get('name')!;
    }
    get dateOfEstablishment(): AbstractControl {
        return this.createGameStudioForm.get('dateOfEstablishment')!;
    }
    get mainOffice(): AbstractControl {
        return this.createGameStudioForm.get('mainOffice')!;
    }

    constructor(private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        this.createGameStudioForm = new FormGroup({
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
    }
    
    createGameStudio(): void {
        debugger;
        if (!this.createGameStudioForm.invalid) {
            let gameStudio: GameStudio = new GameStudio();
            gameStudio.name = this.createGameStudioForm.value.name;
            gameStudio.dateOfEstablishment = this.createGameStudioForm.value.dateOfEstablishment;
            gameStudio.mainOffice = this.createGameStudioForm.value.mainOffice;
            this.gameStudioService.$create(gameStudio).subscribe(x => {
                this.router.navigateByUrl('game-studios');
            });
        }
    }
}
