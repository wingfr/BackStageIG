import { Routes, Route } from 'react-router';
import { TopPage } from './Pages/TopPage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TopPage />} />
      </Routes>
    </>
  )
}

export default App
