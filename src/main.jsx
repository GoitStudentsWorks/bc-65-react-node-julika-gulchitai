import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store, { persistedStore } from './redux/store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './App.jsx';
import ThemeComponent from './components/ThemeComponent/ThemeComponent.jsx';

import Global from './css/common.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <BrowserRouter basename="/bc-65-react-node-julika-gulchitai">
        <ThemeComponent>
          <App />
          <Global />
        </ThemeComponent>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
