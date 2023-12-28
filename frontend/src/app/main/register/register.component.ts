import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  successmsg: any = '';
  errormsg: any = '';
  errorMessage: string = '';

  user = {
    pseudo: '',
    adress: '',
    phone: '',
    pass: '',
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.registerMember(this.user).subscribe(
      (res) => {
        this.successmsg = true;
        this.errormsg = false;
        this.errorMessage = '';
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
        this.errorMessage = error.error.message || "Erreur d'enregistrement";
      }
    );
  }

  ngOnInit(): void {}
}
