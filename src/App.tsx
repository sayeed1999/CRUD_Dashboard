import './App.scss';

import { Provider } from 'react-redux';
import store from './store'; // if a filename is index.js, it is auto imported when its folder is imported

function App() {
  return (
    <Provider store={store}>
      <div>
        Lalala...
      </div>
    </Provider>
  );
}

export default App;
