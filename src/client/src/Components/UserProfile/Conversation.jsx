import { Button, Container, Input, Text, Row, Spacer } from '@nextui-org/react'
import React, { useEffect } from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'

function Conversation() {
  
  const { actualConversation } = useSelector(state => state.conversation)

  useEffect(() => {
    
  }, [actualConversation])

  return (
    <section style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems:'end', flexWrap:'wrap'}}>
      {actualConversation.messages.length > 0 ?
        actualConversation.messages.map(message => {
          return (
            <Row key={message._id}>
              <Text>
                {message.message}
              </Text>
            </Row>
          )
        })
        :
        <Text css={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          No messages yet!
        </Text>
      }
      <Spacer y={1} />
      <article style={{display:'flex', justifyContent:'space-between', minWidth: '100%', alignItems: 'center'}}>
        <Input
          placeholder='Escribe tu mensaje aqui'
          clearable
          bordered
          color="primary"
          size="lg"
          aria-label='Input message'
          css={{width: '100%', marginRight: '5px'}}
        />
        <Button css={{width: 'auto', minWidth: '0', borderRadius: '50%'}}>
          Se
        </Button>
      </article>
    </section>
  )
}

export default Conversation