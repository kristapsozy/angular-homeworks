import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginQuery } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(query: LoginQuery): Observable<any> {
    const url = '';
    const options = {
      headers: {
        Authorization: 'Basic ' + btoa('username:password'),
      },
    };

    return this.http.post(url, query, options);
  }
}
