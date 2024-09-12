import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  sections = [
    {
      title: 'Manual & Automation Testing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isOpen: false,
      maxHeight: '0px'
    },
    {
      title: 'Testing Consultancy',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isOpen: false,
      maxHeight: '0px'
    },
    {
      title: 'User End Testing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isOpen: false,
      maxHeight: '0px'
    },
    {
      title: 'Security Testing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isOpen: false,
      maxHeight: '0px'
    }
  ];

  steps = [
    {
      number: 1,
      title: 'Analyzing your Project’s requirements',
      description: 'Relying on a mature ISO 9001-certified quality management system, we start with studying project requirements and help you improve them, if needed (e.g., they may be incomplete).'
    },
    {
      number: 2,
      title: 'Test Planning and Design',
      description: 'We prepare a detailed testing plan considering your ideas and expectations. We make test cases covering every aspect of your ecommerce solution.'
    },
    {
      number: 3,
      title: 'Test Implementation',
      description: 'We test your ecommerce solution and identify defects and possible areas of improvement.'
    },
    {
      number: 4,
      title: 'Analyzing Testing Results',
      description: 'We provide you with the test summary report describing the identified bugs and analyzing their nature. Also, we give you the overall feedback on the quality of your ecommerce solution.'
    }
  ];

  toggleSection(section: any) {
    section.isOpen = !section.isOpen;
    section.maxHeight = section.isOpen ? '500px' : '0px'; 
  }

  isVisible = this.steps.map(() => false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const stepElements = document.querySelectorAll('.step');
    const windowHeight = window.innerHeight;
    const windowCenter = windowHeight / 2;
    let closestStepIndex = -1;
    let smallestDistance = Infinity;

    // Find the step closest to the center of the viewport
    stepElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distanceToCenter = Math.abs(windowCenter - elementCenter);

      if (distanceToCenter < smallestDistance) {
        smallestDistance = distanceToCenter;
        closestStepIndex = index;
      }
    });

    // Reset all to false, then set the closest step to true
    this.isVisible.fill(false);
    if (closestStepIndex !== -1) {
      this.isVisible[closestStepIndex] = true;
    }
  }


}
