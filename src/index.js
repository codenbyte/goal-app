import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Profile from './components/profile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Profile />, document.getElementById('root'));
registerServiceWorker();
