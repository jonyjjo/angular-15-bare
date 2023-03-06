import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoShowComponent } from './to-do-show.component';

describe('ToDoShowComponent', () => {
  let component: ToDoShowComponent;
  let fixture: ComponentFixture<ToDoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
