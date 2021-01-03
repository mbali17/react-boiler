import React from 'react';

const Button = ({ label, action }) => <button onClick={action}>{label}</button>;

export default Button;
