import { Component } from '@angular/core';
import { ChangeDetectionDemoComponent } from './change-detection-demo/change-detection-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ChangeDetectionDemoComponent], // Import the standalone component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change-detection-app';
}
