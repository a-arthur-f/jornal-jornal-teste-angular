import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Noticia } from '../noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];
  error = 'erro'

  constructor(
    private noticiasService: NoticiasService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.noticiasService.getNoticias()
    .subscribe(({noticias}) => this.noticias = noticias);
  }

}
