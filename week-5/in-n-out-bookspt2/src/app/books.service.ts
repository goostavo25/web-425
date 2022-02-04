/*
================================================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date: 03 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Using Angular Material to create data tables
================================================================
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;
  constructor() {
    this.books = [
      {
        isbn: '9781593279509',
        title: 'Eloquent JavaScript, Third Edition',
        description:
          'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        numOfPages: 472,
        authors: ['Marijn Haverbeke'],
      },
      {
        isbn: '9781491943533',
        title: 'Practical Modern JavaScript',
        description:
          'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.',
        numOfPages: 334,
        authors: ['Nicolás Bevacqua'],
      },
      {
        isbn: '9781593277574',
        title: 'Understanding ECMAScript 6',
        description:
          'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
        numOfPages: 352,
        authors: ['Nicholas C. Zakas'],
      },
      {
        isbn: '9781449365035',
        title: 'Speaking JavaScript',
        description:
          'Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
        numOfPages: 460,
        authors: ['Axel Rauschmayer'],
      },
      {
        isbn: '9781449331818',
        title: 'Learning JavaScript Design Patterns',
        description:
          "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        numOfPages: 254,
        authors: ['Addy Osmani'],
      },
    ];
  }

  //Function to get Books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //Function to get Book by ISBN
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
