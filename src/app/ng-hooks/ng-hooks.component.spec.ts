import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHooksComponent } from './ng-hooks.component';

describe('NgHooksComponent', () => {
  let component: NgHooksComponent;
  let fixture: ComponentFixture<NgHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
