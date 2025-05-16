import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: 'input[digitsOnly]',
  standalone: true
})
export class DigitsOnlyDirective {
  private element: ElementRef | null = inject(ElementRef, {optional: true});

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    if (this.element) this.element.nativeElement.value = value.replace(/[^0-9.-]/g, '');
  }
}
