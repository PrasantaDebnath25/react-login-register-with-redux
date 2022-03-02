import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import Reducer from './Reducer/Reducer';

// const store = createStore(Reducer ,applyMiddleware(thunk));
//  export default store;

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
)

export default store;