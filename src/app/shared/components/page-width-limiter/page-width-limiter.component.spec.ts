import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { PageWidthLimiterComponent } from './page-width-limiter.component';

describe('PageWidthLimiterComponent', () => {
  let component: PageWidthLimiterComponent;
  let fixture: ComponentFixture<PageWidthLimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWidthLimiterComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PageWidthLimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
