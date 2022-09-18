/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FidPostComponent } from './FidPost.component';

describe('FidPostComponent', () => {
  let component: FidPostComponent;
  let fixture: ComponentFixture<FidPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
