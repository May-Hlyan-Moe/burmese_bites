import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div>
      <div className='App'>
        <header className="App-header">
          <h1>BURMESE BITES</h1>
        </header>
        <span>
          <i class="fa-sharp fa-solid fa-utensils"></i>
          RESTURANT
          <i class="fa-sharp fa-solid fa-utensils"></i>
        </span>
      </div>
      <Menu />
    </div>
  );
}

export default App;
