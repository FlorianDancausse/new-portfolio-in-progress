import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { PostPreviewComponent } from './post-preview.component';

describe('PostPreviewComponent', () => {
  let component: PostPreviewComponent;
  let fixture: ComponentFixture<PostPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPreviewComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
