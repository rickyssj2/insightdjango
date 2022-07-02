import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/colors'


export default function SearchBar() {
  return (
    <Container>
        <input type="text" name="" id="" placeholder='search'/>
        <i class="fa-solid fa-magnifying-glass"></i>
    </Container>
  )
}

const Container = styled.div`
font-size:16px;
display:flex;
gap:10px;
margin-right:10px;
align-items:center;
height:35px;
justify-content:center;
background-color:${colors.black};
color:#fff;
padding: 0 10px;
border-radius:5px;
input{
    border:none;
    width:100px;
    height:35px;
    display:flex;
    align-items:center;
    background:inherit;
    color:#fff;
    text-transform: uppercase;
    letter-spacing:1px;
    outline:none;
}
input:focus{
    outline: none,
}
`

