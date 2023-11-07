import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMatDialogComponent } from './food-mat-dialog.component';

describe('FoodMatDialogComponent', () => {
  let component: FoodMatDialogComponent;
  let fixture: ComponentFixture<FoodMatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodMatDialogComponent]
    });
    fixture = TestBed.createComponent(FoodMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
