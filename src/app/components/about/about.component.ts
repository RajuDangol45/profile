import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  private scrollOffset = 0;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setAnimations();
  }

  setAnimations(): void {
    const title = this.elementRef.nativeElement.querySelector('.title');
    const decription = this.elementRef.nativeElement.querySelector('.description');

    window.addEventListener('scroll', () => {
      if (this.elementIsInView(title, this.scrollOffset)) {
        title.classList.add('show');
        [...decription.children].forEach((e: HTMLElement) => e.classList.add('show'));
      } else {
        title.classList.remove('show');
        [...decription.children].forEach((e: HTMLElement) => e.classList.remove('show'));
      }
    });
  }

  elementIsInView(element: HTMLElement, offset: number) {
    const elementTop = element.getBoundingClientRect().top;

    return elementTop <= window.innerHeight - offset;
  }
}
