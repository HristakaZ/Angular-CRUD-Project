import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameStudioComponent } from './game-studio/read/game-studio.component';
import { CreateGameStudioComponent } from './game-studio/create/create-game-studio.component';
import { UpdateGameStudioComponent } from './game-studio/update/update-game-studio.component';
import { DeleteGameStudioComponent } from './game-studio/delete/delete-game-studio.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'game-studios', component: GameStudioComponent },
  { path: 'game-studios/create', component: CreateGameStudioComponent },
  { path: 'game-studios/update/:id', component: UpdateGameStudioComponent },
  { path: 'game-studios/delete/:id', component: DeleteGameStudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
