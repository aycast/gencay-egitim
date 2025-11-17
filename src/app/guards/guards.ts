import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log('canActivateGuard çalıştı');
    return true;
};

export const resolveGuard: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot | null) => {
    const httpClient = inject(HttpClient);
    return httpClient.get('https://jsonplaceholder.typicode.com/photos');
};