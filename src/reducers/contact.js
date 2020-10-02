import {
  CONTACT_INPUT_CHANGE, CONTACT_INPUT_DELETE,
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
    case CONTACT_INPUT_DELETE:
      return {
        ...state,
        contactData: {
          name: '',
          email: '',
          message: '',
        },
      };
    default:
      return state;
  }
};

export default contact;
