import { Component } from '@angular/core';
import { PageWidthLimiterComponent } from '../../shared/components/page-width-limiter/page-width-limiter.component';

@Component({
  selector: 'app-about',
  imports: [PageWidthLimiterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
