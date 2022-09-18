/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FidComponent } from './Fid.component';

describe('FidComponent', () => {
  let component: FidComponent;
  let fixture: ComponentFixture<FidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
