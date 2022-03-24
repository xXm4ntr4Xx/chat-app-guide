import React,{useState} from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'

function MessageForm(props) {
  const [value,setValue]=useState('')
  const {chatId,creds} = props;


//sumbit function
  const handleSubmit=(e)=>{
    setValue(e.target.value)
  }
  //onchange function
  const handleChange=(e)=>{
    e.preventDefault();
    const text = value.trim();
    if(text.length>0)sendMessage(creds,chatId,{text})
    setValue('')
  }



  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input className='message-input'
      placeholder='Send a message ...'
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      />
      
    </form>
  )
}

export default MessageForm