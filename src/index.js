import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student from './student'

ReactDOM.render(
  <React.StrictMode>
    <Student name = 'Webbrain'/>
    <Student name = 'Academy'/>
    <Student name = 'IT'/>
  </React.StrictMode>,
  document.getElementById('root')
);