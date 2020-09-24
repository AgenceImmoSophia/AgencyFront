import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateAgentAccountComponent } from './estate-agent-account.component';

describe('EstateAgentAccountComponent', () => {
  let component: EstateAgentAccountComponent;
  let fixture: ComponentFixture<EstateAgentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateAgentAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateAgentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
