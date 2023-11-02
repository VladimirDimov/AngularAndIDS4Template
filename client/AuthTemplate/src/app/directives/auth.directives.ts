import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../common/authentication.service';
import { tap, takeUntil, Subject, switchMap } from 'rxjs';

@Directive({
  selector: '[ifLoggedIn]',
})
export class IfLoggedInDirective implements OnDestroy {
  private onDestroy$ = new Subject();

  constructor(
    private el: ElementRef,
    private authenticationHelper: AuthenticationService
  ) {
    this.authenticationHelper._isAuthenticated
      .pipe(
        takeUntil(this.onDestroy$),
        tap((isAuthentiated) => {
          if (!isAuthentiated) {
            this.el.nativeElement.style.display = 'none';
          } else {
            this.el.nativeElement.style.display = null;
          }
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(0);
  }
}

@Directive({
  selector: '[ifLoggedOut]',
})
export class IfLoggedOutDirective implements OnDestroy {
  private onDestroy$ = new Subject();

  constructor(
    private el: ElementRef,
    private authenticationHelper: AuthenticationService
  ) {
    this.authenticationHelper._isAuthenticated
      .pipe(
        takeUntil(this.onDestroy$),
        tap((isAuthentiated) => {
          if (isAuthentiated) {
            this.el.nativeElement.style.display = 'none';
          } else {
            this.el.nativeElement.style.display = null;
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(0);
  }
}

@Directive({
  selector: '[IfIsInRole]',
})
export class IfIsInRoleDirective implements OnDestroy {
  private onDestroy$ = new Subject();

  @Input() roles: string[] = [];

  constructor(
    private el: ElementRef,
    private authenticationHelper: AuthenticationService
  ) {
    this.authenticationHelper._isAuthenticated
      .pipe(
        takeUntil(this.onDestroy$),
        tap((isAuthentiated) => {
          if (
            !isAuthentiated ||
            !this.authenticationHelper.isInRoles(this.roles)
          ) {
            this.el.nativeElement.style.display = 'none';
          } else {
            this.el.nativeElement.style.display = null;
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(0);
  }
}
