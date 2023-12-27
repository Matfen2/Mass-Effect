import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]',
})
export class CardDirective {
  constructor(private el: ElementRef) {
    this.scale('1.2');
    this.cursor('pointer');
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  private cursor(point: string) {
    this.el.nativeElement.style.cursor = point;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.scale('1.2');
    this.cursor('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale('1.0');
    this.cursor('pointer');
  }
}
