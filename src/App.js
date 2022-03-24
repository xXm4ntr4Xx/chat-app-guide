
import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './ChatFeed.js'; 

export function App() {
	return (

    <>
		
    <ChatEngine

			height='100vh'
			userName='Pietro'
			userSecret='300488'
			projectID='777a7252-fd29-4f52-88d8-756a06d71449'
      renderChatFeed={chatAppState => <ChatFeed {...chatAppState}/>}
		/>

    </>
	);
}

export default App;
