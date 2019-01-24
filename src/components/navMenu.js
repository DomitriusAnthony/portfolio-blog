import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background: black;
    width: 30%;
    height: 100vh;

    @media (max-width: 37.5em) {
        flex-direction: row;
        width: 100%;
        height: 6rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    
    &::before {
        text-decoration: none;
    }

    &::after{
        text-decoration: none;
    }

    &:visited {
        text-decoration: none;
        color: white;
    }

    &:hover {
        color: rebeccapurple;
    }
`

class NavMenu extends Component {
    render() {
        return (
            <StyledNav>
                <StyledLink to="/character-model">Stats</StyledLink>
                <StyledLink to="/blog-posts">Quests</StyledLink>
                <StyledLink to="/projects">Archives</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </StyledNav>
        )
    }
}

export default NavMenu;