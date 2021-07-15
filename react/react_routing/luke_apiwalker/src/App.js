import './App.css';
import { Router } from '@reach/router';

import Index from './components/Index';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Index />
      <Router>
        <Display path = '/:resource/:num'/>
      </Router>
    </div>
  );
}

export default App;
