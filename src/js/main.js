import { Toolbar } from './toolbar';

const Main = {
  init: () => {
    Toolbar.init();
  },
};

document.addEventListener('DOMContentLoaded', () => {
  document.removeEventListener('DOMContentLoaded', false);
  Main.init();
});
