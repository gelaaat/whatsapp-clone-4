import React from 'react'
import { Text, Card } from '@nextui-org/react'

function MessageBanner({children}) {
  return (
    <Card isHoverable variant='bordered' css={{ mw: '50%' }}>
      <Card.Body css={{paddingBottom: '$1', paddingTop: '$1'}}>
        <Text css={{ }}>{children}</Text>
      </Card.Body>
    </Card>
  )
}

export default MessageBanner