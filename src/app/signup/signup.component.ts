import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  surname: string;
  description: string;
  nickname: string;
  password: string;
  error: boolean;

  constructor(private signUpService: SignupService, private router: Router) {
    this.name = "";
    this.surname = "";
    this.nickname = "";
    this.description = "";
    this.password = "";
    this.error = false;
  }

  ngOnInit() {
    this.error = false;
  }

  signUp(name: String, surname: String, description: String, nickname: String, password: String) {


    if(name.length > 3 && surname.length > 3 && description.length != 5 && nickname.length != 3 && password.length != 3){
      this.signUpService.add(name, surname, description, nickname, password).subscribe((user) => {
        if (user) {
          this.name = "";
          this.surname = "";
          this.description = "";
          this.nickname = "";
          this.password = "";
          this.router.navigate(['/']);
        }
      });
    }

  }
}

