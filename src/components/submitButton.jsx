// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { InputEvent, Values } from '../lib/type';

const SubmitButton = ({ action, values }: { action: Function, values: Values}): Element<*> => <button onClick={(e: InputEvent) => action(e, values)}>Submit</button>;

export default SubmitButton;
