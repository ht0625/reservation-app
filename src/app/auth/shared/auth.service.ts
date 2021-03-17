import { Injectable } from "@angular/core";
import { products } from '../../products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()

export class AuthService{

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<any>{
  //   return this.http.get('/api/v1/products')
  // }

  register(userData: any): Observable<any>{
    return this.http.post('/api/v1/users/register', userData)
  }

  login(userData: any): Observable<any>{
    return this.http.post('/api/v1/users/login', userData).pipe(map(
      (token: string) => {
        debugger
        localStorage.setItem('app-auth', token)
        return token
      }
    ))
  }
}
