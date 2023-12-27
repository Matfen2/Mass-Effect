import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from '../card.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const pages : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CardDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pages),
  ]
})
export class MainModule { }
