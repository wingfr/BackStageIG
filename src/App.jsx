import { Routes, Route } from 'react-router';
import { TopPage } from './Pages/TopPage'
import { AccountPage } from './Pages/AccountPage';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/account' element={<AccountPage />} />
      </Routes>
    </>
  )
}

export default App
