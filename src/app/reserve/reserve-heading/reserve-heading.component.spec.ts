import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveHeadingComponent } from './reserve-heading.component';

describe('ReserveHeadingComponent', () => {
  let component: ReserveHeadingComponent;
  let fixture: ComponentFixture<ReserveHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
