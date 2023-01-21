import logo from './logo.svg';
import './App.css';
/* importante para los estilos de bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
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
     <ItemListContainer/>
    </div>
  );
}

export default App;