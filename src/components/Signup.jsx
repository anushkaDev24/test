import React, { useState } from 'react'
import { Link, NavLink  ,useNavigate} from 'react-router-dom'
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate(); 
  const [username , setUsername] = useState('') 
  const [password , setPassword] = useState('') 

  const SignUp = () =>{
      axios.post('http://127.0.0.1:8000/signup' , {username , password}).then((result)=>{
        alert(result.data);
        setUsername('')
        setPassword('')
      })
  }

  return (
    <div>


<div className='signup_back'>
          <div className='signup'>
            <div className='signup_heading'>
              Signup
            </div>
              
              
              <div className='mid'>
                <div className='username'>
                  <div className='username_heading'>Username :</div>
                  <input className='username_input' onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
                </div>
                <div className='password'>
                  <div className='password_heading'>Password :</div>
                  <input className='password_input' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                </div>
             </div>


             <div className='end'>
               <div className='signup_button_div'>
                 <button onClick={SignUp} className='signup_button'>SignUp</button>
               </div>
               <div className='signup_text'>
                 Already have an account?
                 <Link to={'/'} className='login_link'>Login</Link>
               </div>
             </div>


          </div>
        </div>
         
         
    </div>
  )
}

export default Signup