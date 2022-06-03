import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements AfterViewInit {
  readonly gifPlaybackLoopUrl: string = 'assets/backgroundLoop.gif';
  readonly welcomeHeading: string = "Welcome!";
  @ViewChild('welcomeHeadingId') welcomeHeadingElement!: ElementRef<HTMLHeadingElement>;
  randomRGBColor: string = '';

  getRandomRGBColor(): string {
    let rgb: number[] = [];

    for(let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 255));
    }

    let combinedRgbColors: string = 'rgb('+ rgb.join(',') +')';

    return combinedRgbColors;
  }

  ngAfterViewInit(): void {
    const source = interval(1000);
    source.subscribe(() => {
      this.welcomeHeadingElement.nativeElement.innerHTML = '';
      for(let char: number = 0; char < this.welcomeHeading.length; char++) {
        this.randomRGBColor = this.getRandomRGBColor();
        let span: string = `<span style="color:${this.randomRGBColor}">${this.welcomeHeading[char]}</span>`;
        this.welcomeHeadingElement.nativeElement.style.color = this.randomRGBColor;
        this.welcomeHeadingElement.nativeElement.innerHTML += span;
      }
    });
  }
}
