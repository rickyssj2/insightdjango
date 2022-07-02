import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/colors'
import SearchBar from './SearchBar'
import {Link} from "react-router-dom"


export default function Header() {
  return (
    <>
    <Head >
        <img src="Assets/Images/insight-logo.png" alt=" Not Found" />
        <Icons>
        <a href="https://www.facebook.com/insight.iitbombay"><i class="fa-brands fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/insight.iitb/"><i class="fa-brands fa-instagram-square"></i></a>
        <a href="https://www.linkedin.com/company/insight-iitb/mycompany/">  <i class="fa-brands fa-linkedin"></i></a>
      
       <SearchBar/>
        </Icons>
    </Head>    
    <NavigationBar>
      <Link to="/" activeClassName="active" className="route"><div >Home</div></Link>
      <div className="route">CURRENT EVENTS</div>
      <div className="route">NewsLetters</div>
      <div className="route">IIT BBC</div>
      <div className="route">EDITORIALS</div>
      <div className="route">MICROSITES</div>
      <div className="route">INTERVIEWS</div>
      <div className="route">CULTURALS</div>
      <div className="route">TECH</div>
      <div className="route">ABOUT US</div>
    </NavigationBar>
    </>
  )
}
const Head = styled.div`
width:100%;
padding-top:10px;
display: flex;
justify-content:space-between;
align-items: center;
img{
    width: 180px;
    margin-left:20px;
}
a{
  color:inherit;
}
a:hover{
  color:grey;
}
` 
const Icons = styled.div`
font-size: 35px;
display: flex;
flex-direction: row;
gap:10px;
align-items:center;
justify-content:center;
`
const NavigationBar = styled.div`
width:100%;
display: flex;
padding: 0 40px 0;
justify-content:space-between;
border-top:solid black 3px;
border-bottom:solid black 3px;
text-transform:uppercase;
margin-top:20px;
background-color:${colors.yellow};

.route{
  padding:10px;
  color:${colors.black};
  text-decoration:none;
}

.active{
  color:${colors.primaryColor}
}

`