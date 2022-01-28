/*
=====================================================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Enhanced Composer App
=====================================================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  //composers variable with value of array of IComposers
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}
