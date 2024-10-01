import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import './Styles/Form.css'
import {Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import './Styles/Login.css'
import './Styles/Signup.css'
import Signup from './components/Signup';
import Notes from './components/Notes';
import './Styles/Notes.css'



function App() {
  return (
    <div> 
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/form' element = {<Form/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </div>
  );
}

export default App;
