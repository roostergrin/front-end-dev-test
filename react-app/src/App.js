import './App.css';
import {
  Routes, 
  Route, 
  BrowserRouter as Router,
} from 'react-router-dom'

//components imports
import Hero from './components/Hero';

//css file imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero.css'

function App() {

return (
  <div id="App">
      <Hero />
  </div>
);
}

export default App;
