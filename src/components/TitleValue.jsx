// @flow
import React from 'react';

// types
import type { Element } from 'react';

const TitleValue = ({ label, initialValue }: { label: String, initialValue: number }): Element<*> => <h1>{ label }: <span>{ initialValue }</span> </h1>;

export default TitleValue;
