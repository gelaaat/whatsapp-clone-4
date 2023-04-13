import React, { useEffect } from 'react'
import { Container, Row, Col } from '@nextui-org/react'
import HeaderUserProfile from './UserProfile/HeaderUserProfile'
import Conversation from './UserProfile/Conversation'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ListUserContacts from './UserProfile/ListUserContacts'

function UserProfile() {

  const navigate = useNavigate()
  const { userInfo } = useSelector(state => state.auth)

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
    console.log('renderitzo User Profile')

  }, [userInfo, navigate])

  return (
    <Container
      display="flex"
      justify="center"
      alignItems='center'
      //Aixo no va
      css={{ minWidth:'100%' , minHeight: '100vh', padding: '$10'}}>
      <Row gap={1} css={{
        minHeight: '89vh'
      }} >
        <Col css={{
            '@smMax': {
              display: 'none'
            }
          }}>
          <Row>
            <HeaderUserProfile />
          </Row>

          <ListUserContacts />

        </Col>
        <Col css={{ display: 'flex', alignItems: 'end', height:'89vh', borderLeft: '1px solid grey' }}>
          <Conversation />
        </Col>
      </Row>
     
    </Container>
  )
}

export default UserProfile