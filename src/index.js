import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <BrowserRouter  basename="cats_2023">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// basename="/bootcamp_2023_test"
