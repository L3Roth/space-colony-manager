import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { resourcesReducer } from '@space-economy-manager/resources';
import { buildingsReducer } from '@space-economy-manager/buildings';
import { eventsReducer } from '@space-economy-manager/events';
import { colonistsReducer } from '@space-economy-manager/colonists';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideState('resources', resourcesReducer),
    provideState('buildings', buildingsReducer),
    provideState('events', eventsReducer),
    provideState('colonists', colonistsReducer),
    provideRouter(appRoutes),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
