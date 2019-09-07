import React from 'react';
import Button from './containers/Button';
import Loading from './containers/Loading';
import NewsItem from './containers/NewsItem';
// import logo from './logo.svg';
// import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);
export default App;
