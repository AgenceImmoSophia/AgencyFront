import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClientsInterestedInGoodComponent } from './find-clients-interested-in-good.component';

describe('FindClientsInterestedInGoodComponent', () => {
  let component: FindClientsInterestedInGoodComponent;
  let fixture: ComponentFixture<FindClientsInterestedInGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindClientsInterestedInGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindClientsInterestedInGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
