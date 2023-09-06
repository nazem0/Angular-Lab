import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective {
// To use the element on member functions we have to declare it as class attribute
  constructor(private elem : ElementRef) {
    elem.nativeElement.classList.add('border','border-5')
  }
  @HostListener('mouseover') onMouseOver()
  {
    this.elem.nativeElement.style="scale:1.2"
  }
  @HostListener('mouseout') onMouseOut()
  {
    this.elem.nativeElement.style="scale:1"
  }
}
