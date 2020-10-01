export const CONTACT_INPUT_CHANGE = 'CONTACT_INPUT_CHANGE';

export const contactInputChange = (stateName, payload) => ({
  type: CONTACT_INPUT_CHANGE,
  stateName,
  payload,
});
