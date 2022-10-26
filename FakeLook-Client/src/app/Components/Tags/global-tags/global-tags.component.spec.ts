import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTagsComponent } from './global-tags.component';

describe('GlobalTagsComponent', () => {
  let component: GlobalTagsComponent;
  let fixture: ComponentFixture<GlobalTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
