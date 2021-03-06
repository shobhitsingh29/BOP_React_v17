import  {createStore} from 'redux';

import { reducer } from './reducers/reducer'; //root reducer

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const configureStore = () => {
  const store = createStore(reducer, reduxDevTools);

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducers/reducer', () => {
        store.replaceReducer(reducer);
      });
    }
  }

  return store;
};






export default configureStore;