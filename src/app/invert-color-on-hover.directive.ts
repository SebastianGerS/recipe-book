import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInvertColorOnHover]'
})
export class InvertColorOnHoverDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'forestgreen';
    el.nativeElement.style.backgroundColor = '#EEE';
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
