import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTaskComponent } from './dynamic-task.component';

describe('DynamicTaskComponent', () => {
  let component: DynamicTaskComponent;
  let fixture: ComponentFixture<DynamicTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
