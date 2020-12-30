// @flow
import React from 'react';

// types
import type { Element } from 'react';

const SubmitButton = ({ action, values }: { action: Function, values: { name: string, email: string, company: string, phone: string}}): Element<*> => <button onClick={(e: {preventDefault: Function}) => action(e, values)}>Submit</button>;

export default SubmitButton;
