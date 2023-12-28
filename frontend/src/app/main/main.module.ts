import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDirective } from '../card.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const pages: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [HomeComponent, CardDirective, LoginComponent, RegisterComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    RouterModule.forChild(pages),
  ],
})
export class MainModule {}
