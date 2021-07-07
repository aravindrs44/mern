import React from 'react';
import './App.css';

import PersonCard from './components/person_card';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Hunka"} lastName = {"Hunka"} age = {23} hairColor = {"Black"} />
      <PersonCard firstName = {"Moto"} lastName = {"Moto"} age = {6} hairColor = {"None"} />
    </div>
  );
}

export default App;
