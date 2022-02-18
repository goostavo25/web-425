/*
========================================================================
; Title: Assignment 7.3 Form Validation
; Author: Professor Krasso
; Date: 18 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Add data validation to GPA Calculator App and Forms
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
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {}

  //Sign-Out Function
  signOut() {
    this.cookieService.deleteAll();
    //Returns user to Sign-In Route
    this.router.navigate(['/session/sign-in']);
  }
}
