/**
 * External dependencies
 */
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { Store } from 'redux';
// import 'simplebar';
// import 'whatwg-fetch';

/**
 * Internal dependencies
 */
// import { HotReload } from 'components/hot-reload';
// import { createReduxStore, IApplicationState } from 'state';

// const store: Store<IApplicationState> = createReduxStore();

// ReactDOM.render(
//   <HotReload store={store} />,
//   document.getElementById('root'),
// );

class NameForm extends React.Component<{}, { value: string }> {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Value:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <span>{this.state.value}</span>
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm/>,
  document.getElementById('root')
);
