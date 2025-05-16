import {DigitsOnlyDirective} from './digits-only.directive';
import {createDirectiveFactory, SpectatorDirective} from '@ngneat/spectator';
import {FormsModule} from '@angular/forms';

describe('DigitsOnlyDirective', () => {
  let spectator: SpectatorDirective<DigitsOnlyDirective>;
  const createDirective = createDirectiveFactory({
    directive: DigitsOnlyDirective,
    imports: [FormsModule]
  });

  beforeEach(() => spectator = createDirective(`<input digitsOnly />`));

  it('should create', () => expect(spectator.directive).toBeTruthy());

  ['abc123xyz', '!1@2#3', '   123   ', '1,23'].forEach((value) => {
    it(`should only allow digits for "${value}"`, () => {
      spectator.typeInElement(value);
      expect(spectator.element).toHaveValue('123');
    });
  });

  ['-abc123xyz', '-!1@2#3', ' -  123   ', '-1,23'].forEach((value) => {
    it(`should only allow digits for negative "${value}"`, () => {
      spectator.typeInElement(value);
      expect(spectator.element).toHaveValue('-123');
    });
  });

  ['abc1.23xyz', '!1.@2#3', '   1.23   ', '1.23'].forEach((value) => {
    it(`should only allow digits for decimal "${value}"`, () => {
      spectator.typeInElement(value);
      expect(spectator.element).toHaveValue('1.23');
    });
  });

  ['a-bc1.23xyz', '-!1.@2#3', ' -  1.23   ', '-1.23'].forEach((value) => {
    it(`should only allow digits for negative decimal "${value}"`, () => {
      spectator.typeInElement(value);
      expect(spectator.element).toHaveValue('-1.23');
    });
  });
});
