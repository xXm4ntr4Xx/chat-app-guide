
import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function App() {
	return (

    <>
		<ChatEngine
			height='100vh'
			userName='Pietro'
			userSecret='300488'
			projectID='86c552c5-4ac8-48ce-833d-110b19653591'
		/>

    </>
	);
}

export default App;
