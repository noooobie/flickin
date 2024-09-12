import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

interface Tab {
    id: string;
    title: string;
    content: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

    currentNumber: number = 10; // Initial number
    endNumber: number = 50; // End number
    duration: number = 4000; // Duration in milliseconds
    hasStarted: boolean = false; // To track if increment has started
    
  
    constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }
  

  clicked(tabName: string): void {
    console.log(tabName);
    
    // Define all content elements
    const contents = [
        document.getElementById('content1') as HTMLElement,
        document.getElementById('content2') as HTMLElement,
        document.getElementById('content3') as HTMLElement,
        document.getElementById('content4') as HTMLElement
    ];
    
    // Hide all content elements
    contents.forEach(content => {
        if (content) {
            content.style.display = 'none';
        }
    });

    // Display the selected content based on tabName
    switch (tabName) {
        case 'tab1':
            if (contents[0]) contents[0].style.display = 'block';
            break;
        case 'tab2':
            if (contents[1]) contents[1].style.display = 'block';
            break;
        case 'tab3':
            if (contents[2]) contents[2].style.display = 'block';
            break;
        case 'tab4':
            if (contents[3]) contents[3].style.display = 'block';
            break;
        default:
            console.error('Invalid tabName');
            break;
    }
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


  tabs: Tab[] = [
    {
      id: 'content1',
      title: 'Manual & Testing Automation',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.`
    },
    {
      id: 'content2',
      title: 'Testing Consultancy',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.`
    },
    {
      id: 'content3',
      title: 'UAT Testing',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.`
    },
    {
      id: 'content4',
      title: 'Security Testing',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.`
    }
  ];



}
