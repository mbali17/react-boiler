import React from 'react';

// components
import TitleValue from './TitleValue';
import Button from './Button';

const Counter = (label) => {
  console.log('This is the counter app.');
  return <div>
    <TitleValue label={label}/><br/>
    <Button label= 'Increment' isIncrement = { true }/>
    {/* Adding empty span's to create space between the buttons. */}
    <span></span> <span></span>
    <Button label= 'Decrement' isIncrement = { false }/>
  </div>;
};

export default Counter;
