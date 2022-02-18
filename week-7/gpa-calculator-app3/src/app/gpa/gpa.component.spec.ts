/*
======================================================================
; Title: Assignment 6.4 - Input Properties
; Author: Professor Krasso
; Date: 11 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Input() properties and flexLayouts in GPA Calculator
======================================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
