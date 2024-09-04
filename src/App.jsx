import { Route, Routes } from 'react-router-dom'
import Sign from './Screens/Sign'
import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'

function App() {

  return (
    <>
     <Routes>
      <Route index element={<Sign/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </>
  )
}

export default App
