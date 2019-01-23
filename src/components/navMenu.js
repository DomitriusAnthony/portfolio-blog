import React, { Component } from 'react';
import { Link } from 'gatsby'

class NavMenu extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <nav>
                <Link to="/character-model">Stats</Link>
                <Link to="/blog-posts">Quests</Link>
                <Link to="/projects">Archives</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        )
    }
}

export default NavMenu;