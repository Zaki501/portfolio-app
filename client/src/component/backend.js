import React from "react";
import styled from "styled-components";

const STYLED_CONTAINER = styled.div`

display: flex;
width: 60vw;
height: 60vh;
margin: auto;

font-family: 'opensans-regular', sans-serif;
font-weight: normal;
color: #ccc;
`
const STYLED_SECTION = styled.div`

width: 20vw;
text-align: center;
padding-top: 10vh;
margin: 10px;
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

//"put backend above front end, create a landing page for all API's and briefly explain them. Then push to"
export default function Backend() {

    return (
        <div>
            <STYLED_PAGE_TITLE>
                Back-end Projects
            </STYLED_PAGE_TITLE>
            <STYLED_CONTAINER>


                <STYLED_SECTION>
                    <h2><STYLED_ANCHOR href="https://zaki-portfolio.herokuapp.com/api/shorturl">Timestamp Microservice</STYLED_ANCHOR></h2>

                    <p>
                        Takes a date entry in any format, and returns Unix and UTC date.
                </p>

                </STYLED_SECTION>
                <STYLED_SECTION>

                    <h2><STYLED_ANCHOR href="https://zaki-portfolio.herokuapp.com/api/shorturl">Url Shortener</STYLED_ANCHOR></h2>

                    <p>
                        Enter a website to be shortened, in http / https format.
                </p>
                    <p>
                        If its a new webiste: assigns a unique id.
                </p>
                    <p>
                        If it exists in database, returns existing id.
                </p>


                </STYLED_SECTION>
                <STYLED_SECTION>

                    <h2><STYLED_ANCHOR href="https://zaki-portfolio.herokuapp.com//api/headerparser">Request Header Parser</STYLED_ANCHOR></h2>

                    <p>
                        Parses the request header, and returns IP address, software and language.
                </p>


                </STYLED_SECTION>


            </STYLED_CONTAINER>
        </div>
    )

}