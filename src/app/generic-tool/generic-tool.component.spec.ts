/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericToolComponent } from './generic-tool.component';

describe('GenericToolComponent', () => {
  let component: GenericToolComponent;
  let fixture: ComponentFixture<GenericToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
