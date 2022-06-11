import './App.scss';
import Home from './components/Home';
import Appbar from './components/Appbar';

import { Provider } from 'react-redux';
import store from './store'; // if a filename is index.js, it is auto imported when its folder is imported

function App() {
  return (
    <Provider store={store}>
      <Appbar />
      <Home />
    </Provider>
  );
}

export default App;
