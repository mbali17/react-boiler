import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import TitleValue from '../components/TitleValue';
/* TODO:
  1. Refactor this to use function,
  2. Move the logic for dispatch and state to props into a mapping for the component created under containers.
*/
class Counter extends Component {
  render() {
    return (<div>
    <TitleValue label={this.props.label} initialValue={this.props.number} /><br/>
    <button onClick={this.props.onIncrement}> Increment </button>
    {/* Adding empty span's to create space between the buttons. */}
    <span></span> <span></span>
    <button onClick={ this.props.onDecrement } >Decrement </button>
  </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
