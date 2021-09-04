import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-pagina-nao-econtrada',
  templateUrl: './pagina-nao-econtrada.component.html',
  styleUrls: ['./pagina-nao-econtrada.component.css']
})
export class PaginaNaoEcontradaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

}
