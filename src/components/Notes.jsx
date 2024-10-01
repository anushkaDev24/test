import React, { useEffect, useState } from 'react'
import { Link, NavLink  ,useNavigate} from 'react-router-dom'
import axios from 'axios';



const Notes = () => {
  const navigate = useNavigate()
  const [data , setData] = useState([])

  useEffect(()=>
  {
     const username=localStorage.getItem('USERNAME')
     axios.post('http://127.0.0.1:8000/find' , {username})
     .then((result)=>
     {
        setData(result.data)
        console.log(result.data)
     })
  }, [])

  return (
    <div>
      
      <div className='background'>
        

         
        <div className='info'>
          <div className='heading_div'>
            <div className='heading'>Manage your Notes</div>
          </div>

            
            <div className='main_notes_div'>
              {data.map((note)=>(
              <div className='notes'>
                <ol className='list'> 
                  <div><li>{note.title}</li></div>
                </ol>
                <div className='tools'>
                  <div><img className='edit'  src={require('../Styles/edit.png')}></img></div>
                  <div><img className='delete' src={require('../Styles/trash 1.png')}></img></div>
                </div>
               {/* <div>{note.date}</div>
               <div>{note.text}</div> */}
             </div>
             ))}
            </div>



          <div className='buttons_div'>
            <button className='add_notes' onClick={()=>navigate('/form')}>Add Notes</button>
            <button className='logout' onClick={()=>navigate('/')}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notes