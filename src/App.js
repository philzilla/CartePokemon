import logo from './logo.svg';
import './App.css';
import {Map} from './componants/Map' 

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Pokémon Go !</h1>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
