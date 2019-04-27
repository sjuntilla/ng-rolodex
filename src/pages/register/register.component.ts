import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationData: {
    username: string,
    password: string,
    name: string,
    email: string,
  } = {
      username: '',
      password: '',
      name: '',
      email: '',
    }

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  register() {
    this.auth.register(this.registrationData)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.router.navigate(['/register']);
      });
  }

  ngOnInit() {
  }

}
