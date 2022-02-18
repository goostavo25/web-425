/*
======================================================================
; Title: Assignment 6.4 - Input Properties
; Author: Professor Krasso
; Date: 11 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Input() properties and flexLayouts in GPA Calculator
======================================================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent implements OnInit {
  @Input()
  gpaTotal!: number;

  constructor() {}

  ngOnInit(): void {}
}
