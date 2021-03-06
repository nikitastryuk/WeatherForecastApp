import * as angular from 'angular';

import { App } from './components/app/app.component';
import { Root } from './components/root/root.component';
import { configuration } from './core.configuration';
import { routing } from './core.routes';

export const coreModule =
  angular.module('core', ['ui.router'])
    // Components
    .component(App.selector, App)
    .component(Root.selector, Root)
    // Configuration
    .config(configuration)
    .config(routing)
    .name;
