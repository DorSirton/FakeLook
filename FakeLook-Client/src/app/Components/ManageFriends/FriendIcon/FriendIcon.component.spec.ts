import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendIconComponent } from './FriendIcon.component';

describe('FriendIconComponent', () => {
  let component: FriendIconComponent;
  let fixture: ComponentFixture<FriendIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
