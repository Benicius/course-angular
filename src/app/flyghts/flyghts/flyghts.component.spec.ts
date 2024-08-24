import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyghtsComponent } from './flyghts.component';

describe('FlyghtsComponent', () => {
  let component: FlyghtsComponent;
  let fixture: ComponentFixture<FlyghtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlyghtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyghtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
