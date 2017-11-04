import { reducer } from './info-form.reducer';
import * as fromInfoForm from './info-form.reducer';

describe('Info FormReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromInfoForm.initialState);
    });
  });

});