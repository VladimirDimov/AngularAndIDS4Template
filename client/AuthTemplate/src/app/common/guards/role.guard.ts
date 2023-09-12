import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../authentication.service';

export const roleGuard = (roles: string[]) => {
  const guard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);

    if (authenticationService.isInRoles(roles)) {
      return true;
    } else {
      router.navigateByUrl('/forbidden');
      return false;
    }
  };

  return guard;
};
