import { Application } from '@nativescript/core';
import { installMixins } from '@nativescript/core/ui/core/view';

// Install mixins for proper rendering
installMixins();

Application.run({ moduleName: 'app-root' });