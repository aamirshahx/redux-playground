import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './posts/store';
import PostApp from './posts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostApp />
      </div>
    </Provider>
  );
}

export default App;
