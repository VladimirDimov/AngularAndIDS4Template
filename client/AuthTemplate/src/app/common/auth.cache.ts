import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthCache {
  private static _claims: Claims;

  public roles$: Subject<Claims> = new Subject<Claims>();

  public get claims(): Claims {
    return AuthCache._claims;
  }

  public updateCache(claims: Claims) {
    AuthCache._claims = { ...claims };
    this.roles$.next(AuthCache._claims);
  }
}

export interface Claims {
  role: string[];
}
