import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaDetalhesComponent } from './noticia-detalhes/noticia-detalhes.component';
import { PaginaNaoEcontradaComponent } from './pagina-nao-econtrada/pagina-nao-econtrada.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NoticiaDetalhesComponent,
    PaginaNaoEcontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
