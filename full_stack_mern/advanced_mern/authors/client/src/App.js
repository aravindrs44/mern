import './App.css';
import Home from './views/Home';
import New from './views/New';
import Edit from './views/Edit';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Home path = '/' />
        <New path = '/new' />
        <Edit path = '/edit' />
      </Router>
    </div>
  );
}

export default App;
