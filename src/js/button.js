import {
  MDCRipple,
} from './lib/mdc';

export const Button = {
  init: () => {
    const buttons = document.querySelector('.mdc-button');
    if (buttons) {
      MDCRipple.attachTo(buttons);
    }
  }
};
