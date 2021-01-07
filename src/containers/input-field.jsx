import React, { Component } from 'react';
import { connect } from 'react-redux'
// component
import Input from '../components/input-field';
// action TODO: Rename this  to be captureField once refactorring is done.
import captureFieldAction from '../lib/actions';

class InputField extends Component {
  render() {
    const { fieldName, onCaptureInput } = this.props;
    return <Input onCaptureInput = {onCaptureInput} fieldName = {fieldName}/>;
  }
}

const mapStateToProps = (state) => ({
  values: state.form.values,
});

const mapDispatchToProps = (dispatch) => ({
  onCaptureInput: (id, value) => dispatch(captureFieldAction(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
