/*
=====================================================
; Title: Assignment 6.2 - Input/Output Properties
; Author: Professor Krasso
; Date: 09 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Creating forms to capture user data
;               and output user entries
=====================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}
