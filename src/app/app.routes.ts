import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/admin/layouts/AdminLayout/AdminLayout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/admin/pages/Summary/Summary.component')
      },
      {
        path: 'projects',
        loadComponent: () => import('./modules/admin/pages/Projects/Projects.component')
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
