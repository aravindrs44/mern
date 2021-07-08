import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import Subcontents from './components/subcontents';
import Advertisement from './components/advertisement';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <Subcontents />
        <Subcontents />
        <Subcontents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
