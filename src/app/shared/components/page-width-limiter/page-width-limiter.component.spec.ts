import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWidthLimiterComponent } from './page-width-limiter.component';

describe('PageWidthLimiterComponent', () => {
  let component: PageWidthLimiterComponent;
  let fixture: ComponentFixture<PageWidthLimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWidthLimiterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageWidthLimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
