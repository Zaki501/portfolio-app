import React from "react";
import styled from "styled-components"
import Header from "./component/header"
import Navbar from "./component/navbar"

import Frontend from "./component/frontend";
import Backend from "./component/backend";



export default function App() {

  const STYLED_CONTAINER = styled.div`
height: 300vh;
font-family: arial, helvetica;
display: flex;
flex-direction: column;
`
  const STYLED_PAGE = styled.div`
 height: 100vh;
 background-color: ${props => props.primary ? "#117460" : "rgb(50,50,50)"};
width: 100%;
 `


  return (
    <STYLED_CONTAINER>

      <Navbar />

      <STYLED_PAGE primary id="first">

        <Header />

      </STYLED_PAGE>
      <STYLED_PAGE id="second">

        <Backend />

      </STYLED_PAGE>
      <STYLED_PAGE primary id="third">

        <Frontend />

      </STYLED_PAGE>

    </STYLED_CONTAINER>
  );
}
