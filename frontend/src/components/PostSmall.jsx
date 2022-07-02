import React from 'react'
import styled from 'styled-components'
export default function PostSmall() {
  return (
    <Container>
      <Image src='https://picsum.photos/id/237/200/'></Image>
      <Heading>This is Heading</Heading>
      <Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, veniam...<strong>Read More</strong></Body>
    </Container>
  )
}

const Container= styled.div`
padding: 0 10px 10px 10px;
height: 320px;
border-bottom:1px solid black;
margin:20px 0px 10px;
`
const Heading = styled.h1`
font-size:24px;
margin:10px 0;
text-decoration:underline;
`
const Image = styled.img`
width:100%;
height:170px;
object-fit:cover;

`
const Body = styled.p`
`