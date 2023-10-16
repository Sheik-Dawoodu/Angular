import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListComponent } from './single-list.component';

describe('SingleListComponent', () => {
  let component: SingleListComponent;
  let fixture: ComponentFixture<SingleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleListComponent]
    });
    fixture = TestBed.createComponent(SingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
