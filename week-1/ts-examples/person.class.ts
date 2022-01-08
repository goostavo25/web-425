/*
================================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 08 January 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Program to demonstrate Angular
;===============================================
*/

// Import IPerson
import { IPerson } from "./person.interface";

// Create Person
class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Declare variable myName
let myName = new Person("Gustavo", "Roo Gonzalez");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
