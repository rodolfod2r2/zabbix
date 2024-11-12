import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => loadRemoteModule('dashboard', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'billing',
    loadComponent: () => loadRemoteModule('billing', './routes').then((m) => m.routes),
  },

];
