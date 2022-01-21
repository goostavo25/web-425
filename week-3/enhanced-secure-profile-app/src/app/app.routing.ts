/*<!--
===================================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date: 21 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Guarding Routes
===================================================================
*/

//Import statement for Router, SignInComponent, and HomeComponent
import { Routes } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

//Create and export and array of Route objects
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];
