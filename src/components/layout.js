import React from 'react'
import styled from 'styled-components';
import NavMenu from './navMenu';


import './layout.css'


const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 37.5em) {
    flex-direction: column;
  }
`

const StyledMainPage = styled.div`
    width: 70%;
    background: rebeccapurple;
    height: 100vh;
    color: white;

    @media (max-width: 37.5em) {
      flex-direction: column;
      width: 100%;
    }
`


const Layout = ({ children }) => (
  <AppWrapper>
    <NavMenu />
    <StyledMainPage>
      {children}
    </StyledMainPage>
  </AppWrapper>
)

export default Layout
