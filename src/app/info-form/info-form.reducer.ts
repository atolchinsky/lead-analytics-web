import * as infoForm from './info-form.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: infoForm.Actions): State {
  switch (action.type) {
    case infoForm.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case infoForm.LOAD_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case infoForm.LOAD_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}