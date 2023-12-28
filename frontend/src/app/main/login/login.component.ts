import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  successmsg: any = '';
  errormsg: any = '';
  errorMessage: string = '';

  user = {
    adress: '',
    pass: '',
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.connectMember(this.user.adress, this.user.pass).subscribe(
      (res) => {
        this.successmsg = true;
        this.errormsg = false;
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
        this.errorMessage = error.error.message || 'Erreur de connexion';
      }
    );
  }

  ngOnInit(): void {}
}
