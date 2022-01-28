/*
========================================
; Title: Exercise 4.4 - Async Pipe
; Author: Professor Krasso
; Date: 27 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Async Pipe
========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }

  //Create getComposers function
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
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
