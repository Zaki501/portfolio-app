import React from "react";
import styled from "styled-components"

const STYLED_NAVBAR = styled.nav`
position: fixed;
margin-top: 5px;
width: 20%;
height: 10vh;
justify-items: auto;
font-weight: 2;
`
const STYLED_LIST = styled.li`
padding: 9px 18px;
display: inline;
list-style: outside none none;
background-color: #194b41;
opacity: 0.8;
border-radius: 25%;
margin-right: 20px;
`
const STYLED_ANCHOR = styled.a`
font-weight: bold;
scroll-behavior: smooth;
text-decoration: none;
color: #ffafff!important;
:visited {
    opacity: 0.7;
}
`

export default function Navbar() {
    return (
        <STYLED_NAVBAR>
            <ul>
                <STYLED_LIST>
                    <STYLED_ANCHOR href="#first">Home</STYLED_ANCHOR>
                </STYLED_LIST>
                <STYLED_LIST>
                    <STYLED_ANCHOR href="#second">Backend</STYLED_ANCHOR>
                </STYLED_LIST>
                <STYLED_LIST>
                    <STYLED_ANCHOR href="#third">Frontend</STYLED_ANCHOR>
                </STYLED_LIST>
            </ul>
        </STYLED_NAVBAR>
    )
}