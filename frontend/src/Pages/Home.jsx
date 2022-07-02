import React from 'react'
import styled from 'styled-components'
import Articles from './Articles'
import NewsLetters from './NewsLetters'

export default function Home() {
  return (
    <Container>
        <NewsLetters/>
        <Articles/>
    </Container>
  )
}

const Container = styled.div`
width:100%;
`