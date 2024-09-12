import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

interface Statistic {
  value: any;
  description: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  currentNumber: number = 10; // Initial number
  endNumber: number = 50; // End number
  duration: number = 4000; // Duration in milliseconds
  hasStarted: boolean = false; // To track if increment has started

  statistics: Statistic[] = [
    { value: '5 - 15%', description: 'More test system iteration' },
    { value: '2 Weeks', description: 'Reduction in project time' },
    { value: '', description: 'Decrease in data analysis time' } // Empty value for dynamic number
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

ngOnInit(): void {
  this.setupIntersectionObserver();
}

setupIntersectionObserver(): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.hasStarted) {
        this.hasStarted = true;
        this.incrementNumber(this.currentNumber, this.endNumber, this.duration);
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, { threshold: 0.5 }); // 50% of the element should be visible

  observer.observe(this.el.nativeElement);
}

incrementNumber(start: number, end: number, duration: number): void {
  const range = end - start;
  const incrementTime = Math.abs(Math.floor(duration / range));
  let current = start;

  const timer = setInterval(() => {
    current += 1;
    this.currentNumber = current;

    if (current >= end) {
      clearInterval(timer);
    }
  }, incrementTime);
}


}
