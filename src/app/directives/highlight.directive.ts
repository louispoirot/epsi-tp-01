import { Directive, ElementRef, Input, booleanAttribute } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input({ transform: booleanAttribute }) appHighlight: boolean = true;

  constructor(private el: ElementRef) { }
  ngOnInit() {
    if (this.appHighlight) {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
}

