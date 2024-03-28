import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/signup" element={<SignUp />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
