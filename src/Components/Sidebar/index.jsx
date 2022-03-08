import React from 'react'
import {
  SidebarContainer, SidebarHeader,
  SidebarInfo, SidebarItems
} from './styled'
import {
  Create, InsertComment, Inbox, PeopleAltRounded, Apps, ExpandMore,
  FiberManualRecord, Drafts, BookmarkBorder, FileCopy, ExpandLess, Add
} from '@mui/icons-material'
import SidebarOptions from '../SidebarOptions'


function Sidebar () {
  return (
    <SidebarContainer id='sidebar' >
      <SidebarHeader>
        <SidebarInfo>
          <h2>Moldato</h2>
          <h3>
            <FiberManualRecord />
            Alyson Souza
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarItems>
        <SidebarOptions Icon={InsertComment} title='Threads' />
        <SidebarOptions Icon={Inbox} title='Mentions & reactions' />
        <SidebarOptions Icon={Drafts} title='Saved itens' />
        <SidebarOptions Icon={BookmarkBorder} title='Channel browser' />
        <SidebarOptions Icon={PeopleAltRounded} title='People & user groups' />
        <SidebarOptions Icon={Apps} title='Apps' />
        <SidebarOptions Icon={FileCopy} title='File browser' />
        <SidebarOptions Icon={ExpandLess} title='Show less' />
        <hr />
        <SidebarOptions Icon={ExpandMore} title='Channels' />
        <hr />
        <SidebarOptions Icon={Add} title='Add Channel' />
      </SidebarItems>
    </SidebarContainer>
  )
}

export default Sidebar