import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../common/authentication.service';
import { tap, takeUntil, Subject } from 'rxjs';

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
