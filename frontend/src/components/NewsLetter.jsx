import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/colors'


export default function NewsLetter() {
  return (
    <Container>
        <Image src='https://picsum.photos/270/300?grayscale'/>
        <Heading>Newsletter 22.0</Heading>
        <SubHeading>Nothing | Here</SubHeading>
    </Container>
  ) 
}
const Container = styled.div`
display:flex;
flex-direction:column;
background-color:${colors.white};
align-items:center;
padding-bottom:5px;

`
const Image = styled.img`
width: 270px;
height: 300px;
object-fit:cover;
`
const Heading = styled.h3`
height:60px;
display:flex;
align-items:center;
`
const SubHeading = styled.h5`
`