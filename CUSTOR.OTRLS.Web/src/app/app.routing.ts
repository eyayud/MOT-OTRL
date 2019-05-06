import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
 
export const routes: Routes = [
        {
                path: '',
                loadChildren: './landing/landing.module#LandingModule'
        },
        {
                path: 'auth',
                loadChildren: './auth/auth.module#AuthenticationModule'
        },
        {
                path: 'main',
                loadChildren: './main/main.module#MainModule'
        },
        {
                path: 'denied',
                loadChildren: './common/denied/denied.module#DeniedModule'
        },
        { path: '**',  loadChildren: './common/not-found/not-found.module#NotFoundModule'},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
        // preloadingStrategy: PreloadAllModules,
        // useHash: true
});
