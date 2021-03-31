import React from "react";
import styled from "styled-components";
import Calculator from "./calculator"

const STYLED_CONTAINER = styled.div`

display: flex;
flex-direction: column;

`

const STYLED_COLUMN = styled.div`
margin-top: 5vh;
justify-content: center;
text-align: center;

font-family: 'opensans-regular', sans-serif;
font-weight: normal;
color: #ccc;

`

const STYLED_ANCHOR = styled.a`
font-weight: bold;
scroll-behavior: smooth;
text-decoration: none;
:visited {
    color: #ffafff!important;
    opacity: 0.7;
}
`
const STYLED_PAGE_TITLE = styled.h2`
font: 40px/1.1em 'opensans-bold', sans-serif;
color: #fff;
letter-spacing: -2px;
text-align: center;
margin-top: 10vh;


`

export default function Frontend() {

    return (
<div>
    <STYLED_PAGE_TITLE>
        Front-end projects
    </STYLED_PAGE_TITLE>

        <STYLED_CONTAINER>
            <STYLED_COLUMN>
                A client-side calculator, made with React and styled with styled-components. Math.js library was used for the evaluations.
            </STYLED_COLUMN>
            <STYLED_COLUMN>

                <STYLED_ANCHOR href="https://github.com/Zaki501/calculator-app/blob/master/src/Component/calculator.js"> Click here to see code on github</STYLED_ANCHOR>

            </STYLED_COLUMN>
            <STYLED_COLUMN>
                <Calculator />

            </STYLED_COLUMN>


        </STYLED_CONTAINER>
</div>
    )
}