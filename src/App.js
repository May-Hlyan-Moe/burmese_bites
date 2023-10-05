import './App.css';
import Menu from './Menu';
import Contact from './Contact';

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
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <Menu />
          </div>
          <div className='col-sm-4'>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
