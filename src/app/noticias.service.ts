import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators'
import { Noticia, NoticiasArray } from './noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  api = 'http://200.152.101.74:8686/api/Noticia';

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<NoticiasArray> {
    return this.http.get<NoticiasArray>(`${this.api}/ObterNoticias`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getNoticia(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.api}/ObterNoticiaPorId?id=${id}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Codigo do erro: ${error.status}\nMensagem: ${error.message}`
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
