import './App.css';
import AnonsBlock from './components/AnonsBlock';
import SearchBlock from './components/SearchBlock';
import WatchTrailerBlock from './components/WatchTrailerBlock';
import WidgetsBlock from './components/WidgetsBlock';

function App() {
  return (
    <div className="App">
      <AnonsBlock />
      <SearchBlock />
      <WatchTrailerBlock
        title="Форсаж"
        url="#"
        img="https://via.placeholder.com/468x60?text=Forsage+banner"
      />
      <WidgetsBlock />
    </div>
  );
}

export default App;
