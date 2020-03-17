import React from 'react';
import ReactDOM from 'react-dom';

import './components/app/app'

import App from './components/app/app';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
