import React from "react";
import styled from "styled-components";
import logo from "../logo.svg"
const Header = styled.div`
  background: #F1F1F1;
`

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

const Header_Nav = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header_Hero = styled.div`
  
`
export default function HeaderNav(){
    return(
        <Header>
            <Container>
                <Header_Nav>

                </Header_Nav>
                <Header_Hero>

                </Header_Hero>
            </Container>
        </Header>
    )
}