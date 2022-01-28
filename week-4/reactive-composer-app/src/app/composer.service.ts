/*
=====================================================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 27 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Inversion of Control and Dependency Injection
=====================================================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
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
