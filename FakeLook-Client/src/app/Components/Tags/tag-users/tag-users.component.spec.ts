import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagUsersComponent } from './tag-users.component';

describe('TagUsersComponent', () => {
  let component: TagUsersComponent;
  let fixture: ComponentFixture<TagUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
