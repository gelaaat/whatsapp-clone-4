import React from 'react'
import { Container } from '@nextui-org/react'
import MainBannerHome from './HomeComponents/MainBannerHome'
import NavBarHome from './HomeComponents/NavBarHome'

function Home() {
  return (
    <Container fluid>
      <NavBarHome />
      <MainBannerHome />
    </Container>
  )
}

export default Home