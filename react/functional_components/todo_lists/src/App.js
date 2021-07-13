import React, {useState} from 'react';
import './App.css';
import List from './components/Form';

function App() {
  const [formState, setFormState] = useState([{
    task: "",
    completed: false,
    show: true
  }]);

  return (
    <div className="App">
      <List setFormState = {setFormState} formState = {formState}/>
    </div>
  );
}

export default App;
