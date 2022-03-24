import React from 'react'
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


function ChatFeed(props) {

    const {chats, activeChat,userName, messages} = props;

    const chat = chats && chats[props.activeChat]// find current chat

    

    const renedrMessages = () =>{
      const keys = Object.keys(messages)
      return keys.map((key,idx)=>{
        const message = messages[key];
        const lastMessageKey = idx === 0 ? null : keys[idx-1]//if this is the last message sent
        const isMyMessage = userName === message.sender.userName;//if is my last message


        return (
          <div key={`msg${idx}`} style={{width:'100%'}}>
              <div className='message-block'>
                {
                  isMyMessage ? <MyMessage message={message}/> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                }
              </div>
              <div className='read-receipts' style={{marginRight: isMyMessage ? '0px' : '68px'}}>
                  read-receipts
              </div>
          </div>
        )
      })
    }

    renedrMessages()

    if(!chat)return 'Loading.....'
  return (
      
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat?.title}</div>
        <div className='chat-subtitle'>
          {chat.people.map((person)=> `${person.person.userName}`)}
        </div>
      </div>
      {renedrMessages()}
      <div style={{height:'100px'}}/>
      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat}/>
      </div>
    </div>
  )
}

export default ChatFeed;