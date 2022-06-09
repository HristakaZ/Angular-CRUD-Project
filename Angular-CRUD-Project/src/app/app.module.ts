import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateGameStudioComponent } from './game-studio/create/create-game-studio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { GameStudioService } from './game-studio/services/game-studio.service';
import { CommonModule } from '@angular/common';
import { GameStudioComponent } from './game-studio/read/game-studio.component';
import { MatTableModule } from '@angular/material/table';
import { UpdateGameStudioComponent } from './game-studio/update/update-game-studio.component';
import { DeleteGameStudioComponent } from './game-studio/delete/delete-game-studio.component';
import { GameComponent } from './game/read/game.component';
import { CreateGameComponent } from './game/create/create-game.component';
import { GameService } from './game/services/game.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateGameComponent } from './game/update/update-game.component';
import { DeleteGameComponent } from './game/delete/delete-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WelcomeComponent,
    CreateGameStudioComponent,
    GameStudioComponent,
    UpdateGameStudioComponent,
    DeleteGameStudioComponent,
    GameComponent,
    CreateGameComponent,
    UpdateGameComponent,
    DeleteGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'} },
    GameStudioService,
    GameService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
