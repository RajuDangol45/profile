import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  elementIsInView(element: HTMLElement, offset: number) {
    const elementTop = element.getBoundingClientRect().top;

    return elementTop <= window.innerHeight - offset;
  }
}
