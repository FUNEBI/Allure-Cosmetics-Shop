import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllComments(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get<any>(url)
  }
}
