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

import { GradeSummaryComponent } from './grade-summary.component';

describe('GradeSummaryComponent', () => {
  let component: GradeSummaryComponent;
  let fixture: ComponentFixture<GradeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradeSummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
