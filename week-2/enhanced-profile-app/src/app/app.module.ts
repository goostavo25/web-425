/**
=====================================================
; Title: app.module.ts
; Author: Professor Krasso
; Date: 15 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Root Module
=====================================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
