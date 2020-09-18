import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddGoodComponent } from './form-add-good.component';

describe('FormAddGoodComponent', () => {
  let component: FormAddGoodComponent;
  let fixture: ComponentFixture<FormAddGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
