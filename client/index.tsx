/**
 * External dependencies
 */
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormationForm } from './components/formation_form';

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
ReactDOM.render(
  <React.StrictMode>
    <FormationForm value='change it yo' />,
  </React.StrictMode>,
  document.getElementById('root')
);
