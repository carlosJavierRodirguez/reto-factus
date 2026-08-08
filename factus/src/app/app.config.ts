import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

import { routes } from './app.routes';

// Initialize Vercel Speed Insights
if (typeof window !== 'undefined') {
  injectSpeedInsights();
}

// Initialize Vercel Web Analytics
if (typeof window !== 'undefined') {
  inject();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
