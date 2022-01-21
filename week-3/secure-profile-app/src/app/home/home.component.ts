/*<!--
=====================================================
; Title: Assignment 3.3 Passing Data Routes Part 2
; Author: Professor Krasso
; Date: 21 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Passing Data To Routes Part 2
=====================================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: Boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
