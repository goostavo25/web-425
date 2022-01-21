/*<!--
=====================================================
; Title: Assignment 3.4 Guarding Routes
; Author: Professor Krasso
; Date: 21 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Creating guarding routes
=====================================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
