import React, { useState } from 'react'
import { Dropdown, Navbar, Avatar, Text, Spacer, Button } from '@nextui-org/react'
import { useSelector, useDispatch } from 'react-redux'
import { UserIcon } from './UserIcon'
import ModalAddFriend from './ModalAddFriend'
import DropdownRequests from './DropdownRequests'
import { logout } from '../../features/auth/authActions'

function HeaderUserProfile() {

  const [visibleModal, setVisibleModal] = useState(false)

  const {userInfo} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const handleUserMenu = (action) => { 
    
    switch (action) {
      case 'logout':
        dispatch(logout({})) 
        break;
    
      default:
        break;
    }
  }

  const handlerOpenModal = () => setVisibleModal(true)
  

  return (
    <Navbar isCompact variant={'sticky'} >
      <Navbar.Content>
          <Dropdown>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as='button'
                color='secondary'
                size='md'
                text='User'
              />
            </Dropdown.Trigger>
          
            <Dropdown.Menu
              aria-label='User menu'
              color='secondary'
              onAction={handleUserMenu}
            >
              <Dropdown.Item key={'profile'} css={{minHeight: '50px'}}>
                <Text b color="inherit" css={{whiteSpace: 'normal'}}>
                  Signed in as 
                </Text>
                <Spacer y={0.01} />
                <Text b color='inherit' css={{whiteSpace: 'normal'}}>
                  {userInfo?.email}
              </Text>
              <Spacer y={0.01} />
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Navbar.Content>
      <Spacer x={1} />
      <Navbar.Content>
        <Button icon={<UserIcon />} color='success' fill='currentColor' onPress={handlerOpenModal}>
          Add a friend
        </Button>
        <ModalAddFriend visibleModal={visibleModal} setVisibleModal={ setVisibleModal } />
      </Navbar.Content>
      <Spacer x={1} />
      <Navbar.Content>
        <DropdownRequests />
      </Navbar.Content>
    </Navbar>
  )
}

export default HeaderUserProfile