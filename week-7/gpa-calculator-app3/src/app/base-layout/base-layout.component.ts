/*
========================================================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date: 18 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Use of Reactive Forms in Sign-In guard for GPA Calculator
========================================================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {}

  //Sign-Out Function
  signOut() {
    this.cookieService.deleteAll();
    //Returns user to Sign-In Route
    this.router.navigate(['/session/sign-in']);
  }
}
