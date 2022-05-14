import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
