import logo from './logo.svg';
import './App.css';
import Cart from './Components/cart';
import Products from './Components/producst';
import Summary from './Components/summary';

function App() {
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
      <Cart/>
      <Products/>
     
      <span>
        /**** AQUI LA PRUEBA DE COMO CAMBIA SOLO CON LLAMAR AL COMPONENTE******/
        <Summary/>
      </span>
    </div>
  );
}

export default App;
