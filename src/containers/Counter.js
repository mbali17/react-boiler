import React from 'react';
import TitleValue from '../components/TitleValue';
import Button from '../components/Button';

const Counter = ({ label }) => {
  const incrementNumber = () => {
    console.log('incrementing number');
  };

  const decrementNumber = () => {
    console.log('decrementing number');
  };

  return <div>
    <TitleValue label={label}/><br/>
    <Button label='Increment' action={incrementNumber}/>
    {/* Adding empty span's to create space between the buttons. */}
    <span></span> <span></span>
    <Button label='Decrement' action={decrementNumber}/>
  </div>;
};

export default Counter;
