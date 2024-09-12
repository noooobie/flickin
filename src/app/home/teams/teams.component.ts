import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startAutoCollapse();
  }
  isActive: boolean = false;

  onHover() {
    this.isActive = true;
  }

  onLeave() {
    this.isActive = false;
  }

  items = [
    { title: 'Why Testing is Important?', content: '40 years of experience allow NI to streamline and simplify the test of millions of engineers through reliable solutions. We support your team with unrivaled confidence in the accuracy, precision, and repeatability of your measurements.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut' },
    { title: 'In-house Team vs flicke', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut40 years of experience allow NI to streamline and simplify the test of millions of engineers through reliable solutions. We support your team with unrivaled confidence in the accuracy, precision, and repeatability of your measurements.' },
    { title: 'Enterprise Testing', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut40 years of experience allow NI to streamline and simplify the test of millions of engineers through reliable solutions. We support your team with unrivaled confidence in the accuracy, precision, and repeatability of your measurements.' }
  ];

  expandedItemIndex: number | null = null; // Keeps track of the expanded accordion item
  autoCollapseTimeout: any; // Timeout handler for auto-collapse


  startAutoCollapse(): void {
    // Automatically cycle through accordion items
    this.autoCollapseTimeout = setInterval(() => {
      const nextIndex = (this.expandedItemIndex !== null) ? (this.expandedItemIndex + 1) % this.items.length : 0;
      this.toggleAccordion(nextIndex);
    }, 5000); // 5 seconds interval
  }

  toggleAccordion(index: number): void {
    if (this.expandedItemIndex === index) {
      this.expandedItemIndex = null; // Collapse if already expanded
    } else {
      this.expandedItemIndex = index; // Expand new item
    }
  }

  ngOnDestroy() {
    // Clean up the interval when the component is destroyed
    if (this.autoCollapseTimeout) {
      clearInterval(this.autoCollapseTimeout);
    }
  }

  percentages = [
    {percent:96,name:"Performance"},
    {percent:100,name:"Best Practices"},
    {percent:91,name:"SEO Score"}
  ];

  getStrokeDashArray(percentage: number): string {
    const size = 140; // Updated size of the SVG
    const strokeWidth = 15; // Adjusted stroke width
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dash = (percentage / 100) * circumference;

    return `${dash} ${circumference - dash}`;
  }

}
