import { Component, ElementRef, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private scrollOffset = 0;

  constructor(
    private elementRef: ElementRef,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.setAnimations();
  }

  setAnimations(): void {
    const title = this.elementRef.nativeElement.querySelector('.title');
    const socials =
    this.elementRef.nativeElement.querySelector('.socials');

    window.addEventListener('scroll', () => {
      if (this.utilityService.elementIsInView(title, this.scrollOffset)) {
        title.classList.add('show');
        [...socials.children].forEach((e: HTMLElement) =>
          e.classList.add('show')
        );
      } else {
        title.classList.remove('show');
        [...socials.children].forEach((e: HTMLElement) =>
          e.classList.remove('show')
        );
      }
    });
  }
}
