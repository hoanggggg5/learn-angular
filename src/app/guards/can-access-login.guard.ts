import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessLoginGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedInUser = localStorage.getItem('user');
      // 2. Kiểm tra nếu có thì cho vào admin
      if (loggedInUser) {
        return false;
      }
      // 3. Nếu không thì quay về màn login
      this.router.navigateByUrl('/');
      return false;
  }
}
