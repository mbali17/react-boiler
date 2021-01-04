import React, { useState } from 'react';

// components
import TitleValue from '../components/TitleValue';
import Button from '../components/Button';

// helpers
import { updateNumber as incrementOrDecrementNumber } from '../helpers';

const Counter = ({ label }) => {
  const [number, setNumber] = useState(0);
  return <div>
    <TitleValue label={label} initialValue = { number }/><br/>
    <Button
      label='Increment'
      action={incrementOrDecrementNumber}
      updateState = { setNumber }
      prevNumber = { number }
      isIncrement = { true }/>
    {/* Adding empty span's to create space between the buttons. */}
    <span></span> <span></span>
    <Button
      label='Decrement'
      action={incrementOrDecrementNumber}
      updateState = { setNumber }
      prevNumber = {number}
      isIncrement = { false }/>
  </div>;
};

export default Counter;
