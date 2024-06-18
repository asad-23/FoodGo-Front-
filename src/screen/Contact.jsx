import React, { useState } from 'react'
import axios from 'axios'


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(localStorage.authToken === undefined) return alert('Please login first');
    axios.post('/api/contact', {name, email, subject, message}).then((response)=>{
      const data = response.data
      if(data.success) return alert('Message sent successfully');
    }).catch((error) =>{
      const data = error.response.data
      alert(data.message || "Something went wrong")
    });
  }

  return (
    <div className='max-w-[1100px] p-4 mx-auto mt-[5rem]'>

      <h3 className='text-3xl font-bold'>Contact Here: </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam. Atque quos rem maiores hic magni et porro ipsum quo vel nostrum. Explicabo tempora esse sint porro a, reprehenderit qui.</p>


      <form onSubmit={handleSubmit} className='px-2 py-4 ring-2 my-4 rounded-lg text-center bg-slate-700'>
        <input onChange={(e) => setName(e.target.value)} className='w-[95%] md:w-[46%] p-2 m-2 rounded-md' required type="text" placeholder='Your Name' /> <input onChange={(e) => setEmail(e.target.value)} className='w-[95%] md:w-[47%] p-2 m-2 rounded-md' required type="email" placeholder='Your Email' />
        <input onChange={(e) => setSubject(e.target.value)} className='w-[95%] p-2 m-2 rounded-md' required type="text" placeholder='Subject' />
        <textarea onChange={(e) => setMessage(e.target.value)} className='w-[95%] p-2 m-2 rounded-md' required type="text" placeholder='Message' /> <br />
        <button className='bg-white px-4 py-2 rounded-lg' required type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
