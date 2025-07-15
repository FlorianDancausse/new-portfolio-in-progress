import { Component } from '@angular/core';
import { PageWidthLimiterComponent } from '../../shared/components/page-width-limiter/page-width-limiter.component';
import { PostPreviewComponent } from '../../shared/components/post-preview/post-preview.component';

@Component({
  selector: 'app-blog',
  imports: [PostPreviewComponent, PageWidthLimiterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
