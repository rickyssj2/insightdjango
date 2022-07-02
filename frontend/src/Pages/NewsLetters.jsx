import React from 'react'
import styled from 'styled-components'
import NewsLetter from '../components/NewsLetter'
import { colors } from '../constants/colors'



function NewsLetters() {
  return (
    <>
    <Container>
        <h1>NEWSLETTERS</h1>
    <NewsLetterBox>
    <NewsLetter/>
    <NewsLetter/>
    </NewsLetterBox>
    </Container>
    </>
  )
}

const Container = styled.div`
width:100%;
min-height:560px;
background-color:${colors.grey};
display:flex;
align-items:center;
flex-direction:column;
font-family: "Inknut Antiqua",sans-serif;
padding-bottom:10px;
h1{
    margin:30px 0px;
    font-size: 30px;
}
`
const NewsLetterBox = styled.div`
display:flex;
justify-content:center;
gap:30px;
`

export default NewsLetters