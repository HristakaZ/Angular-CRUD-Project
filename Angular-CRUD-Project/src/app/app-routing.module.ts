import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameStudioComponent } from './game-studio/read/game-studio.component';
import { CreateGameStudioComponent } from './game-studio/create/create-game-studio.component';
import { UpdateGameStudioComponent } from './game-studio/update/update-game-studio.component';
import { DeleteGameStudioComponent } from './game-studio/delete/delete-game-studio.component';
import { GameComponent } from './game/read/game.component';
import { CreateGameComponent } from './game/create/create-game.component';
import { UpdateGameComponent } from './game/update/update-game.component';
import { DeleteGameComponent } from './game/delete/delete-game.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'game-studios', component: GameStudioComponent },
  { path: 'game-studios/create', component: CreateGameStudioComponent },
  { path: 'game-studios/update/:id', component: UpdateGameStudioComponent },
  { path: 'game-studios/delete/:id', component: DeleteGameStudioComponent },
  { path: 'games', component: GameComponent },
  { path: 'games/create', component: CreateGameComponent },
  { path: 'games/update/:id', component: UpdateGameComponent },
  { path: 'games/delete/:id', component: DeleteGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
