import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { InfoFormService } from './info-form.service';
import * as infoForm from './info-form.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InfoFormEffects {
  constructor(
    private infoFormService: InfoFormService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType(infoForm.LOAD)
      .switchMap(payload => this.infoFormService.get()
        // If successful, dispatch success action with result
        .map(res => ({ type: infoForm.LOAD_SUCCESS, payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: infoForm.LOAD_FAIL}))
      );
}
