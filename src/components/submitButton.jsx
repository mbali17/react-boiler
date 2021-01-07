// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { event, Values } from '../lib/types';

const SubmitButton = ({ action, values }: { action: Function, values: Values}): Element<*> => <button onClick={(e: event) => action(e, values)}>Submit</button>;

export default SubmitButton;
