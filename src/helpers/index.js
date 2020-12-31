// @flow

import type {
  PreventDefaultFunction, Values, Triggers, eventTargetIdValue,
} from '../lib/type';

export const captureField = (e: eventTargetIdValue, triggers: Triggers) => {
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

export const submitForm = (e: PreventDefaultFunction, values: Values) => {
  e.preventDefault();
  console.log(`submitting form with values Name: ${values.name}, Email: ${values.email}, Company: ${values.company}, Phone: ${values.phone}`);
};

export default submitForm;
