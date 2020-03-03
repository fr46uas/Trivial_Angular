import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { BotonesRespuestasComponent } from './botones-respuestas/botones-respuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GameComponent,
    BotonesRespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
