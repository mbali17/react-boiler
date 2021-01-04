// @flow
import React from 'react';

import type { Element } from 'react';

const Button = ({
  label, action, updateState, prevNumber, isIncrement,
}: {label: string, action: Function, updateState: Function, prevNumber: number, isIncrement: boolean}): Element<*> => <button onClick= {() => action(prevNumber, updateState, isIncrement)}>{label}</button>;

export default Button;
