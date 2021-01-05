import React, { Component } from 'react';
import { connect } from 'react-redux';
// component.
import ButtonComponent from '../components/Button';

// import type { Element } from 'react';

// const Button = ({
//   label, action, updateState, prevNumber, isIncrement,
// }: {label: string, action: Function, updateState: Function, prevNumber: number, isIncrement: boolean}): Element<*> => <button onClick= {() => action(prevNumber, updateState, isIncrement)}>{label}</button>;

// export default Button;
class Button extends Component {
  render() {
    const { label, isIncrement } = this.props;
    if (isIncrement) {
      return <ButtonComponent label={label} action={this.props.onIncrement}/>;
    }
    return <ButtonComponent label={label} action={this.props.onDecrement}/>;
  }
}

// Each container needs to have acess to the updated state. Hence, we need to subscribe to the store to listen to the changes.
const mapStateToProps = (state) => {
  console.log(state);
  return {
    number: state.number,
  };
};

// Each container needs to dispatch events to the store. This is done by mapping to props.
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT_NUMBER', value: 1 }),
    onDecrement: () => dispatch({ type: 'DECREMENT_NUMBER', value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
