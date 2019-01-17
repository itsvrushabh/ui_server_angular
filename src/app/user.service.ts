import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any>{
    // document.write("<H1>Default data</h1>")
    let res_data = this.http.post('http://localhost:8000/api/users/', userData);
    return res_data
  }

  listAllUsers():Observable<any>{
    let res_data = this.http.get('http://localhost:8000/api/users/')
    return res_data
  }
}
