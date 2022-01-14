import './App.css';
import Navbar from './components/Navbar.js';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar /> 
        </header>
        <div className="main-content">
          <Presentation />
        </div>
    </div>
  );
}

export default App;
