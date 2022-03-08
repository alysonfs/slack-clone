import React from 'react'
import {
  ChatContainer, Header,
  HeaderLeft, HeaderRight
} from './styled'
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'

function Chat () {
  return (
    <ChatContainer id='chat' >
      <Header>
        <HeaderLeft>
          <h4><strong>#Room-name</strong></h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>
    </ChatContainer>
  )
}

export default Chat