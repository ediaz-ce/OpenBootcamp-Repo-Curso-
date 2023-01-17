import logo from './logo.svg';
import './App.css';
import Contactolist from './components/container/contacto_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contactolist></Contactolist>
      </header>
    </div>
  );
}

export default App;
