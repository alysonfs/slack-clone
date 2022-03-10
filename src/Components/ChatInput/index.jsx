import React, { useState } from 'react';
import { ChatInputContainer } from './styled';
import { Button } from '@mui/material';
import { db, collection, doc, serverTimestamp, addDoc } from '../../app/firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/features/authSlice';

function ChatInput ({ channelName = 'ROOM', channelId, chatRef }) {
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false
    }

    const channelRef = doc(db, 'rooms', channelId);
    addDoc(collection(channelRef, 'messages'), {
      message: input,
      timestamp: serverTimestamp(),
      user: user?.name,
      userImage: user?.photoUrl
    })
      .then(() => {
        setInput('')
      })
      .catch(error => alert(error.message))
      .finally(() => {
        chatRef?.current?.scrollIntoView({
          behavior: "smooth"
        })
      })
  }
  
  return (
    <ChatInputContainer>
      <form action="">
        <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          type="text" />
        <Button hidden type='submit' onClick={sendMessage} >SEND</Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput