import { Component } from '@angular/core';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  readonly title: string = 'Game Studio Center';
  readonly relativeGameLogoUrl: string = 'assets/gamelogo.png';
  readonly baseUrl: string = 'http://localhost:4200/';
}
