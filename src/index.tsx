import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/store';
import { App } from '@/components/App';
import '@/styles/index.css';

render(
  <Provider store={store}>
    <BrowserRouter basename="/f1">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
