/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapPostComponent } from './MapPost.component';

describe('MapPostComponent', () => {
  let component: MapPostComponent;
  let fixture: ComponentFixture<MapPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
