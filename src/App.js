import logo from './logo.svg';
import Pesquisa from './Pesquisa'

export function App() {
  return (
    <div className="App">
      <Pesquisa moedaA="USD" cor="#FF6347"/>
      <Pesquisa moedaA="EUR" cor="#FAF0E6"/>
      <Pesquisa moedaA="ARS" cor="#87CEFA"/>
    </div>
  );
}

export default App;
