import React from 'react'
import { Container, Text, Spacer, Row, Col } from '@nextui-org/react'
import MessageBanner from './MessageBanner'

function MainBannerHome() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Text h1>Send messages to your friends</Text>
          </Row>
          <Spacer y={2} />
          <Row>
            <Text b>Free and private messages over the world</Text>
          </Row>
        </Col>
        <Col>
          <Row>
            <MessageBanner>
              Hello mum!
            </MessageBanner>
          </Row>
          <Row></Row>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MainBannerHome