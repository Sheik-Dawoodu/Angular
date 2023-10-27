import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFormComponent } from './angular-form.component';

describe('AngularFormComponent', () => {
  let component: AngularFormComponent;
  let fixture: ComponentFixture<AngularFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularFormComponent]
    });
    fixture = TestBed.createComponent(AngularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
