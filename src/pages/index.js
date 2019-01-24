import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'

const StyledLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10rem;

  @media (max-width: 37.5em) {
    margin: 5rem;
  }
`

const IndexPage = () => (
  <Layout>
    <StyledLandingContainer>
      <h1>Welcome to my site!</h1>
      <p>Currently this is brand new and still under construction. You will definitely see updates coming to the site over time!</p>
      <p>For now I will direct you to my <a href="www.twitter.com">Twitter</a> and <a href="www.linkedin.com">LinkedIn</a> to get in touch!</p>
    </StyledLandingContainer>
    
  </Layout>
)

export default IndexPage
