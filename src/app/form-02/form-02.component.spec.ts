import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form02Component } from './form-02.component';

describe('Form02Component', () => {
  let component: Form02Component;
  let fixture: ComponentFixture<Form02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
