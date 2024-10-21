import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() targetDate!: Date;  // Input to set the target date from outside the component
  remainingTime!: number;       // Remaining time in seconds
  private subscription!: Subscription;

  ngOnInit(): void {
    this.updateRemainingTime();
    this.subscription = interval(1000).subscribe(() => {
      this.updateRemainingTime();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateRemainingTime(): void {
    const now = new Date().getTime();
    const target = new Date(this.targetDate).getTime();
    this.remainingTime = Math.max(0, Math.floor((target - now) / 1000));
  }

  

  get remainingTimeString(): string {
    const hours = Math.floor(this.remainingTime / 3600);
    const minutes = Math.floor((this.remainingTime % 3600) / 60);
    const seconds = Math.floor(this.remainingTime % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
