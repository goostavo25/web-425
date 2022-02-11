/*
==========================================================================
; Title: Assignment 6.4 - Input Properties
; Author: Professor Krasso
; Date: 11 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Input() properties and flexLayouts in GPA Calculator
==========================================================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
