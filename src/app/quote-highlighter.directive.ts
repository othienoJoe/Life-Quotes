import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlighter]'
})
export class QuoteHighlighterDirective {

  constructor(private elem:ElementRef<any>) {
  }
  @HostListener("click") onclick() {
    this.textDeco("gold")
  }

  @HostListener("dbclick") onDoubleClicks() {
    this.textDeco("none")
  }
  private textDeco(action:string) {
    this.elem.nativeElement.style.color=action;
  }
}
