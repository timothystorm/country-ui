import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: 'input[digitsOnly]',
  standalone: true
})
export class DigitsOnlyDirective {
  constructor(private el: ElementRef, private ngControl: NgControl) {
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    const newValue = initialValue.replace(/[^0-9]*/g, '');
    this.ngControl.control?.setValue(newValue, {emitEvent: false});
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
