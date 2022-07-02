import React from 'react'
import styled from 'styled-components'
import Featuredpost from '../components/Featuredpost'
import PostLong from '../components/PostLong'
import PostSmall from '../components/PostSmall'


export default function Articles() {
  return (
    <Container>
       <Heading>
       <i class="fa-solid fa-newspaper"></i> Articles
       </Heading>
       <FlexBox>
        <SideBar>
            <PostSmall/>
            <PostSmall/>
            <PostSmall/>
        </SideBar>
        <MainAricles>
            <Featuredpost/>
            <PostLong/>
            <PostLong/>
        </MainAricles>
        <InstagramPosts></InstagramPosts>
       </FlexBox>
    </Container>
  )
}

const Container = styled.div`
width:100%;
font-family: "Inknut Antiqua", sans-serif;
`
const Heading = styled.h2`
width:100%;
padding:20px 0px;
border-top:1px solid black;
border-bottom:1px solid black;
text-align:center;
text-transform:uppercase;
margin:10px 0;
font-size:26px;
`
const FlexBox = styled.div`
display:flex;
width:100%;
`

const SideBar  = styled.div`
flex:2;
`
const MainAricles  = styled.div`
flex:5;
margin: 0 10px;
padding:0 10px 10px;
border-left:1px solid black;
border-right:1px solid black;
`
const InstagramPosts  = styled.div`
flex:2;
background:url("https://img.icons8.com/color-glass/48/000000/instagram-new.png");
background size: 30px 30px;

`