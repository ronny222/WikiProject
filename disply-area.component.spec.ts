import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplyAreaComponent} from './disply-area.component';

describe('DisplyAreaComponent', () => {
  let component: DisplyAreaComponent;
  let fixture: ComponentFixture<DisplyAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplyAreaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
