import { ElementRef } from '@angular/core';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlighter]'
})
export class QuoteHighlighterDirective {

  constructor(private elem:ElementRef) {
  }
  @HostListener("click") onclick() {
    this.textDecoration("gold")
  }

  @HostListener("dbclick") onDoubleClicks() {
    this.textDecoration("none")
  }
  private textDecoration(action:string) {
    this.elem.nativeElement.style.color=action;
  }
}
