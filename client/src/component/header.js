import React from "react";

import styled from "styled-components"

const STYLED_H1 = styled.h1`
font: 90px/1.1em 'opensans-bold', sans-serif;
color: #fff;
letter-spacing: -2px;
text-align: center;
margin-top: 25vh;
`
const STYLED_H3 = styled.h3`
font: 18px/1.9em 'librebaskerville-regular', serif;
color: #ddd;
margin: 0 auto;
width: 70%;
text-align: center;
line-height: 2.5;
`

function Headline() {
    return (
        <div>
            <STYLED_H1>
                Zaki Abdulle
            </STYLED_H1>
            <STYLED_H3>
                This site is a collection of my work, showing the projects I've created. I have experience with html, css, React, express/mongoDB and git.
            </STYLED_H3>
            <STYLED_H3>
                Below are my front-end and back-end projects.
            </STYLED_H3>

        </div>
    )

}

export default function Header() {
    return (
        <Headline />
    )
}