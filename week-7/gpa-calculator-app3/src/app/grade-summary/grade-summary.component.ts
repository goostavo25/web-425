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
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  //Input statements
  //Input statements
  @Input()
  grade!: string;
  @Input()
  course!: string;

  constructor() {}

  ngOnInit(): void {}
}
