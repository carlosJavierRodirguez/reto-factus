import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { routes } from './app.routes';

// Initialize Vercel Speed Insights
if (typeof window !== 'undefined') {
  injectSpeedInsights();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
