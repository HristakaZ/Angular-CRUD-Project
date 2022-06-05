import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStudioComponent } from './game-studio/game-studio.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'game-studios', component: GameStudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
