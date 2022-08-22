import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer mensaje="Catalogo proximamente"/>
    </div>
  );
}

export default App;
