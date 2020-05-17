import * as React from 'react';
import { connect } from 'react-redux';
import { updateField } from '../../state/actions/field_actions';


import { NumEntryProps, NumEntryState } from './types';

class NumEntryBase extends React.Component<NumEntryProps, NumEntryState> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dispatchUpdateField('0');
  }

  handleChange(event) {
    this.props.dispatchUpdateField(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.value);
    event.preventDefault();
  }

  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.handleChange} />
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateField: (value) => dispatch(updateField(value))
});

const mapStateToProps = (state) => ({
  value: state.field.value
});

const NumEntry = connect(mapStateToProps, mapDispatchToProps)(NumEntryBase);
export { NumEntry };