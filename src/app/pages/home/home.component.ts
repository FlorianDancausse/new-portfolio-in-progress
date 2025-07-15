import { Component } from '@angular/core';
import { PageWidthLimiterComponent } from '../../shared/components/page-width-limiter/page-width-limiter.component';

@Component({
  selector: 'app-home',
  imports: [PageWidthLimiterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
