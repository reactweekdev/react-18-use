import reactLogo from '@/assets/react.svg';

import Router from '@/app/router/Router';

import './App.css';

const App = () => (
  <div className="App">
    <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
    <Router />
    <p className="read-the-docs">React 18 use() hook showcase</p>
  </div>
);

export default App;
