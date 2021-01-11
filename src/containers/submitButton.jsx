import React, { Component } from 'react';
import { connect } from 'react-redux';

import Submit from '../components/submitButton';

// helpers
// If the name of the file is index.js , we can skip the index.js as this is the default name used if the name is passed.
import { submitForm } from '../helpers';

class SubmitButton extends Component {
  render() {
    const { values } = this.props;
    return <Submit action = {submitForm} values= {values} />;
  }
}

const mapDispatchToProps = (state) => ({
  values: state.form.values,
});

export default connect(mapDispatchToProps)(SubmitButton);
