import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Playvideo from './Components/Playvideo/Playvideo'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/browse/*' element={<Home/>}/>
        <Route path={`/playvideo/:id`} element={<Playvideo/>} />
      </Routes>
    </div>
  )
}

export default App
