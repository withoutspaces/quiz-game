import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../screens/Home'
import GameScreen from '../screens/Game'
import Cadastrar from '../screens/Cadastrar'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz" element={<GameScreen />} />
        <Route exact path="/cadastrar" element={<Cadastrar />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
