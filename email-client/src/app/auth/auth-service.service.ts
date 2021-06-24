import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  usernameavailable(username: string) {
    return   this.http.post<any>('https://api.angular-email.com/auth/username', {
      username
    });
  }
  constructor(private http: HttpClient) { }
}
