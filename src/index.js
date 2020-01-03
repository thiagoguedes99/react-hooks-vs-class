import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './AppComErro';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
if ( navigator.serviceWorker ) {
  navigator.serviceWorker.register('./sw.js').then(register => {
    console.log('foiii!!!!')
  })
}