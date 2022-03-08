import React from 'react'
import { SidebarOptionsContainer, SidebarOptionChannel } from './styled'

function SidebarOptions ({ Icon, title }) {
  return (
    <SidebarOptionsContainer >
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