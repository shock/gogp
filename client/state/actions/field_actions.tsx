import { UPDATE_FIELD } from './types';

export const updateField = (id, value) => dispatch => {
  console.log(`updateField called with id: ${id}, value: ${value}`)
  let payload = {
    id: id,
    value: value
  };
  dispatch(
    {
      type: UPDATE_FIELD,
      payload: payload
    }
  )
}