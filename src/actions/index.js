export const CONTACT_INPUT_CHANGE = 'CONTACT_INPUT_CHANGE';
export const CONTACT_INPUT_DELETE = 'CONTACT_INPUT_DELETE';

export const contactInputChange = (stateName, payload) => ({
  type: CONTACT_INPUT_CHANGE,
  stateName,
  payload,
});

export const contactInputDelete = () => ({
  type: CONTACT_INPUT_DELETE,
});
