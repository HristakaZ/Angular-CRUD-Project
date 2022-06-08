import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.services';

@Component({
  selector: 'update-game-studio-component',
  templateUrl: './update-game-studio.component.html',
  styleUrls: ['./update-game-studio.component.css']
})

export class UpdateGameStudioComponent implements OnInit {
    updateGameStudioForm!: FormGroup;
    gameStudio!: GameStudio;
    isIdInputHidden: boolean = true;

    constructor(private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        let id: number = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
        this.updateGameStudioForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl(''),
            dateOfEstablishment: new FormControl(''),
            mainOffice: new FormControl(''),
        });
        
        this.gameStudioService.getById(id).subscribe(x => {
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
        this.gameStudio.id = this.updateGameStudioForm.value.id;
        this.gameStudio.name = this.updateGameStudioForm.value.name;
        this.gameStudio.dateOfEstablishment = this.updateGameStudioForm.value.dateOfEstablishment;
        this.gameStudio.mainOffice = this.updateGameStudioForm.value.mainOffice;
        this.gameStudioService.update(this.gameStudio).subscribe(x => {
            this.router.navigateByUrl('game-studios');
        });
    }
}
