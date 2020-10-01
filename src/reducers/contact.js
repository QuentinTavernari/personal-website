import {
  CONTACT_INPUT_CHANGE,
} from '../actions';

const initialState = {
  contactData: {
    name: '',
    email: '',
    message: '',
  },
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_INPUT_CHANGE:
      return {
        ...state,
        contactData: {
          ...state.contactData,
          [action.stateName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default contact;
