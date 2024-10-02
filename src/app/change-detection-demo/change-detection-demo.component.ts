import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: ['./change-detection-demo.component.css'],
  standalone: true, // Marking this component as standalone
  changeDetection: ChangeDetectionStrategy.OnPush // Using OnPush for manual control
})
export class ChangeDetectionDemoComponent {
  count: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  // Manually trigger change detection
  triggerChangeDetection() {
    this.count += 1;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  // Auto update count (won't trigger change detection automatically due to OnPush)
  autoUpdate() {
    setTimeout(() => {
      this.count += 1;
      // We need to call cdr.detectChanges() here if we want the view to update
    }, 2000);
  }
}
