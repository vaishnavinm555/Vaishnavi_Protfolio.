import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //ReactDOM.render is used to render an element or component to the virtual DOM.

                                                                    //The first argument specifies what needs to be rendered .The second argument specifies where to render.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//StrictMode

//React.StrictMode: It is a helper component which helps the developers in identifying the problems in the application. The React.StrictMode component does not render any visible UI

//StrictMode helps with the below :

//Identifying components with unsafe lifecycles
//Warning about legacy string ref API usage
//Warning about deprecated findDOMNode usage
//Detecting unexpected side effects
//Detecting legacy context API
