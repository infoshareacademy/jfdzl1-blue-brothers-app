import { database } from '../../firebase';

const POPULATE_LOCAL = 'POPULATE_LOCAL';

export const getLocal = (id) => dispatch => {
  database.ref(`/locals/${id}`).on('value', snapshot => {
    dispatch(populateLocal(snapshot.val()));
  })
}

const populateLocal = (data) => ({
  type: POPULATE_LOCAL,
  data
});

const INITIAL_STATE = {
  data: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_LOCAL:
      return {
        data: action.data
      }
    default:
      return state;
  }
}