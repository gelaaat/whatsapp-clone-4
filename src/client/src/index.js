import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import StyleWrapper from './StyleWrapper';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <StyleWrapper>
            <App />
          </StyleWrapper>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


