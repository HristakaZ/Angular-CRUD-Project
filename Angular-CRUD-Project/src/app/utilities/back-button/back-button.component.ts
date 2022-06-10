import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'back-button-component',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
    constructor(private location: Location) {
        
    }

    redirect(): void {
        this.location.back();
    }
}