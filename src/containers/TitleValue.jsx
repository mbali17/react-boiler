import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitleValueComponent from '../components/TitleValue';

class TitleValue extends Component {
  render() {
    console.log(this.props.label.label);
    return <TitleValueComponent label={ this.props.label.label} initialValue={this.props.number}/>;
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
export default connect(mapStateToProps, mapDispatchToProps)(TitleValue);
