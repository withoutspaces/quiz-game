import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import GameScreen from './screens/Game';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quiz" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

