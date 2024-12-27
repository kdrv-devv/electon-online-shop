import React from 'react'
import Header from '../../components/hompage-components/header'
import Showcase from '../../components/hompage-components/showcase'
import Popular from '../../components/hompage-components/popular-products'

const Home = () => {
  return (
    <>
        <Header/>
        <Showcase/>
        <Popular/>
    </>
  )
}

export default Home