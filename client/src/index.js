import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatBox from './components/ChatBox'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <ChatBox />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
