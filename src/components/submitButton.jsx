// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { Values } from '../lib/type';

const SubmitButton = ({ action, values }: { action: Function, values: Values}): Element<*> => <button onClick={(e: {preventDefault: Function}) => action(e, values)}>Submit</button>;

export default SubmitButton;
