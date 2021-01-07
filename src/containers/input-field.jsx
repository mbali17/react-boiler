import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from '../components/input-field';

class InputField extends Component {
  render() {
    const { captureField, fieldName, triggers } = this.props;
    return <Input captureField = {captureField} fieldName = {fieldName} triggers= {triggers}/>;
  }
}

const mapStateToProps = (state) => ({
  values: state.forms.values,
});

const mapDispatchToProps = () => {

};

export default connect(mapStateToProps)(InputField);
