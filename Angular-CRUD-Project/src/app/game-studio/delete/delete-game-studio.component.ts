import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStudio } from '../game-studio.model';
import { GameStudioService } from '../services/game-studio.service';

@Component({
  selector: 'delete-game-studio-component',
  templateUrl: './delete-game-studio.component.html',
  styleUrls: ['./delete-game-studio.component.css']
})

export class DeleteGameStudioComponent implements OnInit {
    deleteGameStudioForm!: FormGroup;
    gameStudio!: GameStudio;
    isIdInputHidden: boolean = true;
    public columnsToDisplay = ['name', 'dateOfEstablishment', 'mainOffice', 'games'];

    constructor(private gameStudioService: GameStudioService, private router: Router) {

    }

    ngOnInit(): void {
        let id: number = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
        this.deleteGameStudioForm = new FormGroup({
            id: new FormControl('')
        });
        
        this.gameStudioService.getById(id).subscribe(x => {
            this.gameStudio = x;    
            this.deleteGameStudioForm.setValue({
                id: this.gameStudio.id
            });
        });
    }
    
    deleteGameStudio(): void {
        debugger;
        console.log(this.deleteGameStudioForm.value.id);
        this.gameStudioService.delete(this.deleteGameStudioForm.value.id).subscribe(x => {
            this.router.navigateByUrl('game-studios');
        });
    }
}
