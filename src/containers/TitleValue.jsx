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
const mapStateToProps = (state) => ({
  number: state.number,
});

export default connect(mapStateToProps)(TitleValue);
