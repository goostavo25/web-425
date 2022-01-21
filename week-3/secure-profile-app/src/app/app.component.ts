/**
=====================================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 15 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: App Components
=====================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Secure Profile App';
}
