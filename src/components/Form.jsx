import axios from 'axios';
import React, { useState } from 'react'
import { Link, NavLink  ,useNavigate} from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate()
    const[text,setText]=useState('');
    const[title,setTitle]= useState('');
    const[date,setDate]=useState(new Date())
    function submit()
    {
        // alert(`text: ${text}\n Title: ${title} \n Date: ${date}`);
        try
        {
          const username = localStorage.getItem("USERNAME")
            axios.post("http://127.0.0.1:8000/create" , {text , title , date , username })
            .then((result)=>
            {
              alert(result.data)
              setDate(new Date())
              setText('')
              setTitle('')
              navigate("/notes")
            })
        }
        catch(err)
        {
            alert(err)
        }
    }
    
  return (
    <div > 



      <div className='form_background'>
       <div className='back_div'><div className='back'>
         <Link to={'/notes'} className='b'>
           <img className='back_image'  src={require('../Styles/Group 49.png')}></img>
         </Link></div></div>
         <div className='title_date'>
           <div className='title'>
             <text className='title_date_headings'>Title :</text>
             <input type="text" value={title} className='a'
              onChange={(e)=>{setTitle(e.target.value)}}/>
           </div>
           <div className='date'>
             <text className='title_date_headings'>Date :</text>
             <input type="date" value={date} className='a'
              onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
         </div>
          <div className='text_button'>
           <div className='note'>
             <div className='note_heading_div'>
               <text className=' note_heading'>Notes :</text>
             </div>
             <textarea className='text' rows={30} cols={111} 
               onChange ={(e)=>{setText(e.target.value)}}>
             </textarea>
            </div>
           <div className='add_button_div'>
             <button className='add_button' onClick={submit}>Add</button>
           </div>
          </div>
      </div>


    </div>
  )
}

export default Form