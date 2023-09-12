import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class AuthCache {
  private static _claims: Claims;
  private static _claims$: BehaviorSubject<Claims | null> =
    new BehaviorSubject<Claims | null>(null);

  public get claims(): Claims {
    return AuthCache._claims;
  }

  public get claims$(): BehaviorSubject<Claims | null> {
    return AuthCache._claims$;
  }

  public updateCache(claims: Claims) {
    AuthCache._claims = { ...claims };
    AuthCache._claims$.next(AuthCache._claims);
  }
}

export interface Claims {
  role: string[];
  name: string;
}
