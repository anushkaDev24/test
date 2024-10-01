import React, { useState } from 'react'
import { Link, NavLink  ,useNavigate} from 'react-router-dom'
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();  
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const login =()=>
  {
    axios.post('http://127.0.0.1:8000/login' , {username ,password})
    .then((result)=>
    {
       if (result.data == "")
       {
         alert('wrong credisentials')
       }
       else
       {
        localStorage.setItem('USERNAME', username)
        navigate('/notes')
       }
    })
  }

  return (
    <div>

        <div className='login_back'>
          <div className='login'>
            <div className='login_heading'>
              Login
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
               <div className='login_button_div'>
                 <button onClick={login} className='login_button'>Login</button>
               </div>
               <div className='signup_text'>
                 Don't have any account?
                 <Link to={'/signup'} className='signup_link'>Signup</Link>
               </div>
             </div>


          </div>
        </div>
         
         
    </div>
  )
}

export default Login