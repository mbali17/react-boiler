// @flow
import React from 'react';

import type { Element } from 'react';

const Button = ({ label, action }: {label: string, action: Function}): Element<*> => <button onClick= {() => action()}>{label}</button>;

export default Button;
