import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Reducer from './Redux/Reducer/Reducer';
import store from './Redux/Store';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Provider store={store}>
          <App history={customHistory} />
      </Provider>
        
    </Router>
  </React.StrictMode> ,
  document.getElementById('root')
);

reportWebVitals();