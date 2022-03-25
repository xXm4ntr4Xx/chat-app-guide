import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='Pietro'
			userSecret='300488'
			projectID='777a7252-fd29-4f52-88d8-756a06d71449'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;