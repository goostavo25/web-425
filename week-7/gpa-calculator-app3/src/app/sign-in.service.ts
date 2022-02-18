/*
========================================================================
; Title: Assignment 7.2 Reactive Forms
; Author: Professor Krasso
; Date: 18 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Use of Reactive Forms in Sign-In guard for GPA Calculator
========================================================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    //Student Id predetermined values
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  //Function to validate studentId number w predetermined values
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
