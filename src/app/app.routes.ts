import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/auth/auth').then((mod) => mod.Auth),
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((mod) => mod.Home),
    },
    {
        path: 'catalogo',
        loadComponent: () => import('./pages/catalogo/catalogo').then((mod) => mod.Catalogo),
    },
    {
        path: 'ligas',
        loadComponent: () => import('./pages/ligas/ligas').then((mod) => mod.Ligas),
    },
    {
        path: 'contato',
        loadComponent: () => import('./pages/contato/contato').then((mod) => mod.Contato),
    }
];
