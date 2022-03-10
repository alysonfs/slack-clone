import React from 'react'
import { MessageContainer, MessageInfo } from './styled'

function Message ({ message, user, userImage, time }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="user" />
      <MessageInfo>
        <h4>
          {user}{' '}
          <span>{time}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message