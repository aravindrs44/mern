import React, {useState} from 'react';
import './App.css';

import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [boxes, setBoxes] = useState([{
    color: "black",
    size: 100
  }]);

  // const boxStateUpdate = () =>  {

  // }

  return (
    <div className="App">
      <Form setBoxes = {setBoxes} boxes = {boxes} />
      {
        boxes.map((boxes, i) => <Display key = {i} boxes = {boxes} />)
      }
    </div>
  );
}

export default App;
