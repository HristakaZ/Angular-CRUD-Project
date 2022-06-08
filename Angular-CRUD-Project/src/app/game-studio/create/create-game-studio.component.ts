import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.services';

@Component({
  selector: 'create-game-studio-component',
  templateUrl: './create-game-studio.component.html',
  styleUrls: ['./create-game-studio.component.css']
})

export class CreateGameStudioComponent implements OnInit {
    createGameStudioForm!: FormGroup;

    constructor(private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        this.createGameStudioForm = new FormGroup({
            name: new FormControl(''),
            dateOfEstablishment: new FormControl(''),
            mainOffice: new FormControl('')
        });
    }
    
    createGameStudio(): void {
        debugger;
        let gameStudio: GameStudio = new GameStudio();
        gameStudio.name = this.createGameStudioForm.value.name;
        gameStudio.dateOfEstablishment = this.createGameStudioForm.value.dateOfEstablishment;
        gameStudio.mainOffice = this.createGameStudioForm.value.mainOffice;
        this.gameStudioService.create(gameStudio).subscribe(x => {
            this.router.navigateByUrl('game-studios');
        });
    }
}
