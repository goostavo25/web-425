/*
==============================================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Enhanced Composer App
==============================================================
*/

//Import statement for IComposer
import { throwError } from 'rxjs';
import { IComposer } from './composer.interface';

//Creating a new a Composer class
export class Composer {
  //Creating composer array
  composers: Array<IComposer>;

  //Constructor with composerId, fullName and genre.
  constructor() {
    //List of composers from composer-list.
    this.composers = [
      { composerId: 100, fullName: 'Simon Diaz', genre: 'Flokloric' },
      { composerId: 101, fullName: 'Juan Vicente Torrealba', genre: 'Popular' },
      { composerId: 102, fullName: 'Ali Primera', genre: 'Popular' },
      { composerId: 103, fullName: 'Lasso', genre: 'Popular' },
      { composerId: 104, fullName: 'Gustavo Dudamel', genre: 'Classical' },
    ];
  }
  //Create getComposers function
  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
