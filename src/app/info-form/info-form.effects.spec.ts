import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Info FormEffects } from "./info-form.effects";
import { Info FormService } from "./info-form.service";
import { Observable } from "rxjs/Observable";

describe('Info FormEffects', () => {
  let runner, info-formEffects, info-formService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      Info FormEffects,
      {
        provide: Info FormService,
        useValue: jasmine.createSpyObj('info-formService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    info-formEffects = TestBed.get(Info FormEffects);
    info-formService = TestBed.get(Info FormService);
  });

  describe('info-form$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});