/**
 *<!--
=====================================================
; Title: my-details.component.ts
; Author: Professor Krasso
; Date: 15 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: My details
=====================================================
 *
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2022', '#CodingWithAngular', '#ngFlorida'];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person(
      'Gustavo Roo Gonzalez',
      'Venezuelan Food',
      'Gray'
    );
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
