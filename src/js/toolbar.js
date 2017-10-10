import {
  MDCTemporaryDrawer,
  MDCRipple,
  MDCToolbar,
} from './lib/mdc';

export const Toolbar = {
  init: () => {
    // Waterfall toolbar
    const toolbar = MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
    toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

    // add ripple to tabs
    // document.querySelectorAll('.tn-nav-tab').forEach(MDCRipple.attachTo);

    // Drawer
    const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
    document.querySelector('.tn-toolbar-menu-icon').addEventListener('click', () => drawer.open = true);
  },
};
