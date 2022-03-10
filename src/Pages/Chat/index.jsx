import React, { useEffect, useRef } from 'react';
import {
  ChatContainer, Header, ChatBottom,
  HeaderLeft, HeaderRight, ChatMessages,
} from './styled'
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import ChatInput from '../../Components/ChatInput';
import Message from '../../Components/Message';

import { useSelector } from 'react-redux'
import { selectRoomId } from '../../app/features/appSlice'
import { db, collection, doc, query, orderBy } from '../../app/firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

function Chat () {
  const chatRef = useRef(null)
  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(
    roomId && doc(db, 'rooms', roomId)
  )

  const [roomMessages] = useCollection(
    roomId &&
    query(
      collection(
        doc(db, `rooms/${roomId}`), 'messages'),
      orderBy('timestamp', 'asc')
    )
  )

  useEffect(() => {
    console.log(chatRef)
    chatRef?.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [roomId, roomMessages])

  return (
    <ChatContainer id='chat' >
      <Header>
        <HeaderLeft>
          <h4><strong>#{roomDetails?.data().name || 'ROOM'}</strong></h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {roomMessages?.docs.map(doc => (
          <Message
            key={doc?.id}
            message={doc?.data().message}
            user={doc?.data().user}
            userImage={doc?.data().userImage}
            time={new Date(doc?.data().timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <ChatBottom ref={chatRef} />
      </ChatMessages>
      <ChatInput
        chatRef={chatRef}
        channelName={roomDetails?.data().name}
        channelId={roomId} />
    </ChatContainer>
  )
}

export default Chat