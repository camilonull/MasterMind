import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = environment.url;

  constructor(
    private http:HttpClient
  ) { }

  getToken(){
    return localStorage.getItem('token')
  }
  setToken(token:any){
    return localStorage.setItem('token',token)
  }
  removeToken(){
    return localStorage.removeItem('token')
  }

  public postRequest(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post<any>(this.url+'/users/create', body,{'headers':headers});
  }

  validateUser(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    console.log(body)
    return this.http.post<any>('http://localhost:3000/users/login', body,{'headers':headers});
  }
}


