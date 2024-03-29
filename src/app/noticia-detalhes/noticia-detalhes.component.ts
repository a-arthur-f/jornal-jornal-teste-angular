import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Noticia } from '../noticia';

@Component({
  selector: 'app-noticia-detalhes',
  templateUrl: './noticia-detalhes.component.html',
  styleUrls: ['./noticia-detalhes.component.css']
})
export class NoticiaDetalhesComponent implements OnInit {
  noticia: Noticia = {
    cod_noticia: 0,
    titulo: '',
    resumo: '',
    img_url: '',
    dt_atualizacao: '',
    dt_criacao: '',
    texto: ''
  };

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private noticiasService: NoticiasService,
  ) { }

  ngOnInit(): void {
    this.get();
    console.log(this.noticia.dt_criacao)
  }

  get() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticiasService.getNoticia(Number(id))
    .subscribe(noticia =>  {
      this.noticia = noticia;
      this.noticia.dt_criacao = new Date(this.noticia.dt_criacao).toLocaleDateString();
      this.noticia.dt_atualizacao = new Date(this.noticia.dt_atualizacao).toLocaleDateString();
    })
  }

  voltar() {
    this.location.back();
  }
}
