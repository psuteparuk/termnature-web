import { Button } from './button';
import { Toolbar } from './toolbar';

const Main = {
  init: () => {
    Button.init();
    Toolbar.init();
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.removeEventListener('DOMContentLoaded', false);
  Main.init();
});
