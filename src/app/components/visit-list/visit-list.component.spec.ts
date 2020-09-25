import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/form/sign-up/sign-up.component.spec.ts
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
=======
import { VisitListComponent } from './visit-list.component';

describe('VisitListComponent', () => {
  let component: VisitListComponent;
  let fixture: ComponentFixture<VisitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitListComponent ]
>>>>>>> origin/componentVisit:src/app/components/visit-list/visit-list.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/form/sign-up/sign-up.component.spec.ts
    fixture = TestBed.createComponent(SignUpComponent);
=======
    fixture = TestBed.createComponent(VisitListComponent);
>>>>>>> origin/componentVisit:src/app/components/visit-list/visit-list.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
