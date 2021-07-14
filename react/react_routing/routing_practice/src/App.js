import './App.css';
import Home from './components/Home';
import Singular from './components/Singular';
import Color from './components/Color';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path = '/home'/>
        <Singular path = '/:id'/>
        <Color path = '/:thing/:textcolor/:bgcolor'/>
      </Router>
    </div>
  );
}

export default App;
