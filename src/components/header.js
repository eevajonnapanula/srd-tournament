import React from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Image from 'grommet/components/Image'

import logo from '../assets/SRD-transparent.png'


export default ({small}) => (
      <Header style={{paddingBottom: '5rem', justifyContent: small ? 'center' : 'flex-start', paddingTop: '2rem'}}>
        <Image src={logo}
          size="small" />
        {!small && <Title style={{fontSize: '3rem', paddingLeft: '5rem'}}>
          Pelipäivän infot
        </Title>}
      </Header>
)
