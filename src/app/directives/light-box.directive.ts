import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective implements OnChanges {
  // To use the element on member functions we have to declare it as class attribute
  @Input() border_color: string ='blue';
  @Input() original_border_color: string ='black';
  constructor(private elem: ElementRef,) {
    
  }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border = `3px solid ${this.border_color}`
  }
  @HostListener('mouseover') onMouseOver() {
    this.elem.nativeElement.style.border = `3px solid ${this.original_border_color}`

  }
  @HostListener('mouseout') onMouseOut() {
    this.elem.nativeElement.style.border = `3px solid ${this.border_color}`
  }

}
