/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewFriendAddingComponent } from './NewFriendAdding.component';

describe('NewFriendAddingComponent', () => {
  let component: NewFriendAddingComponent;
  let fixture: ComponentFixture<NewFriendAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFriendAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFriendAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
