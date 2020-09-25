import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientAccountComponent } from './edit-client-account.component';

describe('EditClientAccountComponent', () => {
  let component: EditClientAccountComponent;
  let fixture: ComponentFixture<EditClientAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
