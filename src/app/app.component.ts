import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CountdownTimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  targetDate = new Date(2024, 10, 12);
  title = 'it-is-happening';
}
