import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaDetalhesComponent } from './noticia-detalhes/noticia-detalhes.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PaginaNaoEcontradaComponent } from './pagina-nao-econtrada/pagina-nao-econtrada.component';

const routes: Routes = [
  {path: '', redirectTo: 'noticias', pathMatch: 'full'},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticia/:id', component: NoticiaDetalhesComponent},
  {path: '**', component: PaginaNaoEcontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
