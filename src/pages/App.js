import './App.css';
import {Map} from '../componants/Map' 
import Layout from '../componants/Layouts/Layout';

function App() {
  return (

<Layout content={
  <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Pokémon Go !</h1>
          <Map />
        </div>
      </div>
    </div>
  </>
}>



</Layout>



  );
}

export default App;
