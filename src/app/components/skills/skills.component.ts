import { Component, ElementRef, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  private scrollOffset = 0;
  public skills = [
    {
      name: 'JavaScript',
      rating: 5,
    },
    {
      name: 'Angular',
      rating: 5,
    },
    {
      name: 'Ionic',
      rating: 5,
    },
    {
      name: 'Native Android',
      rating: 4,
    },
    {
      name: 'Node.js',
      rating: 2,
    },
    {
      name: 'Vue.js',
      rating: 3,
    },
    {
      name: 'Capacitor',
      rating: 4,
    },
    {
      name: 'Java SE',
      rating: 4,
    },
    {
      name: 'HTML5',
      rating: 4,
    },
    {
      name: 'CSS3',
      rating: 4,
    },
    {
      name: 'SASS',
      rating: 4,
    },
    {
      name: 'Cordova',
      rating: 3,
    },
  ]

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
    const skills =
      this.elementRef.nativeElement.querySelector('.skills').children;

    window.addEventListener('scroll', () => {
      if (this.utilityService.elementIsInView(title, this.scrollOffset)) {
        title.classList.add('show');
        this.showSkillsAnimationOneByOne([...skills]);
      } else {
        title.classList.remove('show');
        this.hideSkillsAnimationOneByOne([...skills]);
      }
    });
  }

  showSkillsAnimationOneByOne(skills: HTMLElement[]) {
    skills.forEach((e: HTMLElement) =>
      e.classList.add('show')
    );
  }

  hideSkillsAnimationOneByOne(skills: HTMLElement[]) {
    skills.forEach((e: HTMLElement) =>
      e.classList.remove('show')
    );
  }
}
