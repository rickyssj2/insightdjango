import React from "react";
import styled from "styled-components";

export default function PostLong() {
  return (
    <Container>
      <TextBox>
        <Heading>This is also an heading</Heading>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          impedit vel suscipit, soluta eaque beatae. Dolorum rep Exercitationem ratione explicabo quasi. Libero dolorum quidem
          dolorem molestias repellat iste ipsum officiis beatae blanditiis
          necessitatibus?
        </Body>
      </TextBox>
      <Image src="https://picsum.photos/seed/picsum/200/300"></Image>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display:flex;
  height:230px;
  padding:10px 0 20px;
  border-bottom:1px solid black;
  align-items:center;
`;
const TextBox = styled.div`
flex:4;
`;
const Heading = styled.h1`
font-size:26px;
text-decoration:underline;
`;
const Body = styled.p``;
const Image = styled.img`
flex:2;
height:150px;`;
