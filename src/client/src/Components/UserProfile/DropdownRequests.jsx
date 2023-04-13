import { Dropdown, Avatar, Button } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { acceptRequestFriend } from '../../features/auth/authActions'

function DropdownRequests() {

  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.auth)

  const handlerAcceptRequest = (e) => {

    const contactId = e.target.name

    dispatch(acceptRequestFriend({
      contactId
    }))

    
  }

  const handlerRejectRequest = () => {

  }

  return (
    <Dropdown>
      <Dropdown.Button >
        Pending Friends Request
      </Dropdown.Button>
      
      {userInfo?.pendingRequestContacts.length > 0 ? 
      
        <Dropdown.Menu>
          {userInfo?.pendingRequestContacts.map((contacts) => {
            return(
              <Dropdown.Item key={contacts._id} withDivider icon={
                <Avatar
                  size='lg'
                  color='primary'
                  bordered
                  text={contacts.username}
                />
                }>
                {contacts.username}
                
                <Button size='xs' name={contacts._id} onPress={handlerAcceptRequest} color='primary'>
                  Accept Request
                </Button>
                <Button size='xs' name={contacts._id} onPress={handlerRejectRequest} color='error'>
                  Reject Request
                </Button>

              </Dropdown.Item>
            
            )
            
        })}
        </Dropdown.Menu>
        :
        <Dropdown.Menu>
          <Dropdown.Item>
            Not Request yet!
          </Dropdown.Item>
        </Dropdown.Menu>
      }

    </Dropdown>
  )
}

export default DropdownRequests