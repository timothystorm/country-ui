import {DigitsOnlyDirective} from './digits-only.directive';
import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';

@Component({
  imports: [
    FormsModule,
    DigitsOnlyDirective
  ],
  template: `<input digitsOnly [(ngModel)]="value">`
})
class TestHostComponent {
  value: string = '';
}

describe('DigitsOnlyDirective', () => {
  let input: HTMLInputElement;
  let spectator: Spectator<TestHostComponent>;
  const createComponent = createComponentFactory(TestHostComponent);

  beforeEach(() => {
    spectator = createComponent();
    input = spectator.query('input')!;
  });

  it('should create', () => expect(spectator.component).toBeTruthy());

  ['-abc1,23xyz', '!-1@2#.3', ' -  12.3   ', '-1,2.3'].forEach((value) => {
    it(`should only allow digits for "${value}"`, () => {
      input.value = value;
      spectator.dispatchFakeEvent(input, 'input');

      expect(spectator.component.value).toBe('123');
      expect(input.value).toBe('123');
    });
  });
});
