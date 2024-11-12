import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'cost-manager',
        loadComponent: () => import('./dashboard/cost-manager/cost-manager.component').then(m => m.CostManagerComponent)
      },
      {
        path: 'report',
        loadComponent: () => import('./dashboard/report/report.component').then(m => m.ReportComponent)
      },
      {
        path: '',
        redirectTo: 'read',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'finance',
    loadComponent: () => import('./finance/finance.component').then(m => m.FinanceComponent),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
