import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { resourcesReducer } from '@space-economy-manager/resources';
import { buildingsReducer } from '@space-economy-manager/buildings';


bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ resources: resourcesReducer }),
    provideStore({ buildings: buildingsReducer }),
    provideRouter(appRoutes),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));
