import {
  MDCRipple,
} from './lib/mdc';

export const Button = {
  init: () => {
    MDCRipple.attachTo(document.querySelector('.mdc-button'));
  }
};
