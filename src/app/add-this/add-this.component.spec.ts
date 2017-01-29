/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddThisComponent } from './add-this.component';

describe('AddThisComponent', () => {
  let component: AddThisComponent;
  let fixture: ComponentFixture<AddThisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
