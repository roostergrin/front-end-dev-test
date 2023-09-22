import './App.css';
import {
  Routes, 
  Route, 
  BrowserRouter as Router,
} from 'react-router-dom'

//components imports
import Hero from './components/Hero';

function App() {

return (
  <div id="App">
      <Hero />
  </div>
);
}

export default App;
