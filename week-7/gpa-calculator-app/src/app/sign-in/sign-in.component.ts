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
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {
    console.log(this.cookieService.get('session_user'));
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      //Validator for studentId to only allow numeric values
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }

  //Helper function to return the form controls
  get form() {
    return this.signinForm.controls;
  }

  // Adds cookie to browser and validates the studentId or displays error message

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      //If studentId is valid, go to home screen
      this.router.navigate(['/']);
      //If studentId not valid, display error message
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }
}
