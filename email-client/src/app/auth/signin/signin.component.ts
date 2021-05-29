import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authform = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)

    ],[this.uniqueusername.validate]),
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  },{ validators: [this.matchpassword.validate]}
  );
  constructor(private matchpassword: MatchPassword,
              private uniqueusername: UniqueUsername ) { }

  ngOnInit(): void {
  }

}
