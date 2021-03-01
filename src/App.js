import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Players from './Component/Players/Players';
import Front from './Component/Front/Front';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Front></Front>
      </div>
      <div>
        <Players></Players>
      </div>
    </div>
  );
}

export default App;
