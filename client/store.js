import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducers
import rootReducer from './reducers/index';

//import data
import comments from './data/comments';
import posts from './data/posts';

//create an object for default data
const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(broserHistory, store);

export default store;
