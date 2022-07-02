import React from 'react'
import styled from 'styled-components'


export default function NewsLetter() {
  return (
    <Container>
        <Image src='https://unsplash.it/300/400'/>
        <Heading>Newsletter 22.0</Heading>
        <SubHeading>Nothing | Here</SubHeading>
    </Container>
  ) 
}
const Container = styled.div`
display:flex;
flex-direction:column;
`
const Image = styled.img`
width: 300px;
height: 400px;
object-fit:cover;
`
const Heading = styled.h2`
height:60px;
display:flex;
align-items:center;
`
const SubHeading = styled.h4`
`