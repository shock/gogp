import { UPDATE_FIELD } from './types';

export const updateField = (value) => dispatch => {
  dispatch(
    {
      type: UPDATE_FIELD,
      payload: value
    }
  )
}