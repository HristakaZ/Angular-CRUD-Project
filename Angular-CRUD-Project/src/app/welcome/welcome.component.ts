import { Component } from '@angular/core';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  readonly gifPlaybackLoopUrl: string = 'assets/backgroundLoop.gif';
  readonly welcomeHeading: string = "Welcome!";
}
