import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'game-studio-component',
  templateUrl: './game-studio.component.html',
  styleUrls: ['./game-studio.component.css']
})

export class GameStudioComponent implements OnInit {
    gameStudioForm!: FormGroup;

    ngOnInit(): void {
        this.gameStudioForm = new FormGroup({
            name: new FormControl(''),
            dateOfEstablishment: new FormControl(''),
            mainOffice: new FormControl(''),
            games: new FormControl('')
        });
    }

    createGameStudio(): void {
        debugger;
        console.log(this.gameStudioForm.value);
    }
}
