/*
=====================================================
; Title: Assignment 6.3 Layouts
; Author: Professor Krasso
; Date: 10 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Reusable layouts w/ different routes
=====================================================
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
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {}
}
