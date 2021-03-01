import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Players from './Component/Players/Players';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aperiam!</p>
      </div>
      <div>
        <Players></Players>
      </div>
    </div>
  );
}

export default App;
