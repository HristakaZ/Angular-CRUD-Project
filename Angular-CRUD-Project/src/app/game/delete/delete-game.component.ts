import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'delete-game-component',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})

export class DeleteGameComponent implements OnInit {
    deleteGameForm!: FormGroup;
    game: Game = new Game();
    isIdInputHidden: boolean = true;

    constructor(private gameService: GameService, private router: Router, private deleteGameSnackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        let id: number = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
        this.deleteGameForm = new FormGroup({
            id: new FormControl('')
        });
        
        this.gameService.$getById(id).subscribe(x => {
            debugger;
            this.game = x;    
            this.deleteGameForm.setValue({
                id: this.game.id
            });
        });
    }
    
    deleteGame(): void {
        debugger;
        this.gameService.$delete(this.deleteGameForm.value.id).subscribe(x => {
            this.deleteGameSnackBar.open('Game was successfully deleted!', 'X', {
                duration: 3000
            });
            this.router.navigateByUrl('games');
        });
    }
}
