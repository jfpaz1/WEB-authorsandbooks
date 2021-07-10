import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl ="http://localhost:29170/";
  readonly AuthorsUrl ="http://localhost:29170/author";
  readonly BooksUrl ="http://localhost:29170/book";

  constructor(private http:HttpClient) { }

  getAutorsList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'author');
  }

  getBooksList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'book');
  }

  getAuthorByFilter(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + 'author/GetAuthorByFilter');
  }

}
