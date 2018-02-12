import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInvertColorOnHover]'
})
export class InvertColorOnHoverDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'azure';
    el.nativeElement.style.backgroundColor = '#607D8B';
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.invertColors();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.invertColors();
  }

  private invertColors() {
    const backgroundColor = this.el.nativeElement.style.color;
    const color = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }

}
