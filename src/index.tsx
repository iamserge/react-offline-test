import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';
const API_URL = 'https://api.carbonintensity.org.uk/generation';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render((<App apiUrl={API_URL} />), document.getElementById('reactMountPoint'));
});
