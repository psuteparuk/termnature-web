import mdcAutoInit from '@material/auto-init/dist/mdc.autoInit';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import { MDCTab, MDCTabBar } from '@material/tabs/dist/mdc.tabs';
import { MDCToolbar } from '@material/toolbar/dist/mdc.toolbar';

mdcAutoInit.register('MDCRipple', MDCRipple);
mdcAutoInit.register('MDCTab', MDCTab);
mdcAutoInit.register('MDCTabBar', MDCTabBar);

export {
  MDCTemporaryDrawer,
  MDCRipple,
  MDCTab,
  MDCTabBar,
  MDCToolbar,
};
