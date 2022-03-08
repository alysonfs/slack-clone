import React from 'react'
import { SidebarOptionsContainer, SidebarOptionChannel } from './styled'
import { addDoc, collection, db, serverTimestamp } from '../../app/firebase'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../../app/features/appSlice'

function SidebarOptions ({ Icon, title, addChannelOption, id, }) {
  const dispatch = useDispatch()

  const addChannel = () => {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      addDoc(collection(db, 'rooms'), {
        name: channelName,
        timestamp: serverTimestamp()
      })
    }
  }

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }))
    }
  }

  return (
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: '10px' }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel >
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}

    </SidebarOptionsContainer>
  )
}

export default SidebarOptions