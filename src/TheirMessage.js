import React from 'react'

function TheirMessage({message,lastMessage}) {

  const isFirstMessagebyUser = !lastMessage || lastMessage.sender.username !== message.sender.username
  return (
    <div className='message-row'>
      {isFirstMessagebyUser && (
        <div className='message-avatar' style={{backgroundImage:`url(${message?.sender?.avatar})`}}/>

        
)}
{
  (message?.attachment?.length > 0) ?
    
  (
    <img
      src={message.attachments[0].file}
      alt="message-attachment"
      className="message-image"
      style={{ marginLeft: isFirstMessagebyUser ? '4px' : '48px' }}
    />
  )
  : (
    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessagebyUser ? '4px' : '48px' }}>
      {message.text}
    </div>
  )}
</div>
);
};

export default TheirMessage;