import React from 'react';

const SubmitButton = ({ action, values }) => <button onClick={(e) => action(e, values)}>Submit</button>;

export default SubmitButton;
