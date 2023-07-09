import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeadingComponent } from './site-heading.component';

describe('SiteHeadingComponent', () => {
  let component: SiteHeadingComponent;
  let fixture: ComponentFixture<SiteHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
