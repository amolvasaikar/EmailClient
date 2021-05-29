import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AsyncValidator, FormControl} from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {
  }
  validate = (control: FormControl) => {
    const  { value } = control;
    return this.http.post('https://api.angular-email.com/auth/username', {
      username : value
    }).pipe(
      map(values => {
        console.log(values);
        return null;
      })
    );
  }
}
