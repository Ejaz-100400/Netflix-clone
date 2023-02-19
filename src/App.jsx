import './App.css'
import LoginHomePage from './Components/Login/LoginHomePage'
import LoginPg from './Components/Login/LoginPg'
import Home from './Components/Home/Home'
import Playvideo from './Components/Playvideo/Playvideo'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginHomePage/>}/>
        <Route exact path='/login' element={<LoginPg/>}/>
        <Route path='/browse/*' element={<Home/>}/>
        <Route path={`/playvideo/:id`} element={<Playvideo/>} />
      </Routes>
    </div>
  )
}

export default App
