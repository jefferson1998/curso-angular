import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CriarCursoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
