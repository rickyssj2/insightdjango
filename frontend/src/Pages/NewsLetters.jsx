import React from "react";
import styled from "styled-components";
import NewsLetter from "../components/NewsLetter";
import { colors } from "../constants/colors";

function NewsLetters() {
  return (
    <>
      <Container>
        <h1>NEWSLETTERS</h1>
        <NewsLetterBox>
          <div className="faded">
          <NewsLetter />
          </div>
          <div className="main">
            <NewsLetter className="main" />
          </div>
          <div className="faded">
          <NewsLetter />
          </div>
        </NewsLetterBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 560px;
  background: url("Assets/images/background-left.png") left,
    url("Assets/images/background-right.png") right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Inknut Antiqua", sans-serif;
  padding-bottom: 10px;
  h1 {
    margin: 30px 0px;
    font-size: 30px;
  }
`;
const NewsLetterBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 200px;

  .main {
    position: absolute;
    top: 50px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    z-index:1;
  }
  .faded{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    opacity:0.65;
    z-index:0;
    transition: all ease-in 500ms;
  }
  .faded:hover{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    opacity:1;
    z-index:2;
  }
`;

export default NewsLetters;
