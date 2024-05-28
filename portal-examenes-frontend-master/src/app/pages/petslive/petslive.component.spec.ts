import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsliveComponent } from './petslive.component';

describe('PetsliveComponent', () => {
  let component: PetsliveComponent;
  let fixture: ComponentFixture<PetsliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsliveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
