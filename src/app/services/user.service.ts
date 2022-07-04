import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(environment.login, user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.register, user);
  }
}
