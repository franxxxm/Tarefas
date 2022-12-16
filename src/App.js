import './App.css';
import FirstComponent from './components/FirstComponents';
import Componentes from './components/Componentes';
import Imagens from './components/Imagens';
import Hooks from './components/Hooks';
import List from './components/List';
import Render from './components/Render';
import Fragmentos from './components/Fragmento';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      {/* jsx  do krla okadofiksaoifk*/}
     <h1>mundo e legal</h1>
      <FirstComponent/>
      <Componentes/>
      <Imagens/>
      <Hooks/>
      <List/>
      <Render x={10} />
      <Fragmentos />
      <Container>
        <h1>Ola fdp aod aosk pksapkod</h1>
      </Container>
    </div>
  );
}

export default App;
