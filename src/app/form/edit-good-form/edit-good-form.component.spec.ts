import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGoodFormComponent } from './edit-good-form.component';

describe('EditGoodFormComponent', () => {
  let component: EditGoodFormComponent;
  let fixture: ComponentFixture<EditGoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGoodFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
