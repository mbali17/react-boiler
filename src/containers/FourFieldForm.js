// @flow
import React from 'react';

// types
import type { Element } from 'react';

// Components
import SubmitButton from './submitButton';
import InputField from './input-field';

const FourFieldForm = (): Element<*> => {
  const fields = ['name', 'email', 'company', 'phone'];
  return <form>
            {fields.map((fieldName, key) => <InputField key={key} fieldName = {fieldName}/>)}
            <SubmitButton />
          </form>;
};
export default FourFieldForm;
