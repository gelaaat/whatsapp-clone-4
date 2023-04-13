import { Avatar, Text, Row, Button, Spacer } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Contact.css'
import { setConversationView } from '../../features/Conversation/conversationActions'

function ListUserContacts() {
  
  const { userInfo } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {

  }, [userInfo])

  const handleConversationView = (e) => {    
    const contactId = e.target.parentNode.id

    dispatch(setConversationView({
      contactId
    }))

  }

  return (
    <>
      {userInfo?.contacts.length > 0 ?
        userInfo.contacts.map(contact => {
          return (
            <Row key={contact._id} id={contact._id} css={{alignItems:'center', borderBottom: '1px solid grey' }}>
              <Button onPress={handleConversationView} css={{ width: '100%', height: '100%'}} light>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                  <Avatar
                    size="lg"
                    text='Contact'
                  />
                  <div style={{ display: 'flex' }}>
                    <Text h2 b>
                      {contact.username}
                    </Text>
                  </div>
                </div>
              </Button>
              <Spacer y={3} />
            </Row>
          )        
        })
        :
        <Text b>
          No Contacts yet!
        </Text>
      }
    </>
  )
}

export default ListUserContacts