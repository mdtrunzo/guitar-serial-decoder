import Main from './components/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Gibson from './components/Gibson'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gibson-decoder" element={<Gibson />} />
      </Routes>
    </Router>
  )
}

export default App
