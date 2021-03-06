/*
================================================================
; Title: Assignment 5.2 Layout and Navigation
; Author: Professor Krasso
; Date: 03 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Using Angular Material to implement navigation,
;              color theming, and working with flex-layout.
================================================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
