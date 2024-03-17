import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<any>{
    const url = 'https://api.slingacademy.com/v1/sample-data/users';
    return this.http.get<any>(url)
    
  }
}
