import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGoodListComponent } from './client-good-list.component';

describe('ClientGoodListComponent', () => {
  let component: ClientGoodListComponent;
  let fixture: ComponentFixture<ClientGoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientGoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
