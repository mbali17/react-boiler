// @flow

import type {
  Values, Triggers, event,
} from '../lib/types';

export const captureField = (e: event, triggers: Triggers) => {
  const { id, value } = e.target;
  switch (id) {
    case 'name':
      triggers.setName(value);
      break;
    case 'email':
      triggers.setEmail(value);
      break;
    case 'company':
      triggers.setCompany(value);
      break;
    case 'phone':
      triggers.setPhone(value);
      break;
    default:
      console.log('This is the default case');
  }
};

export const submitForm = (e: event, values: Values) => {
  e.preventDefault();
  console.log(`submitting form with values Name: ${values.name}, Email: ${values.email}, Company: ${values.company}, Phone: ${values.phone}`);
};

export default submitForm;
