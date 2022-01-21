/*<!--
===================================================================
; Title: Assignment 3.3 Passing Data Routes Part 2
; Author: Professor Krasso
; Date: 21 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Using Routes to pass data and create router guards
===================================================================
*/

//Import statement for Router, SignInComponent, and HomeComponent
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

//Create and export and array of Route objects
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
