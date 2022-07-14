import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <NavLink exact to ="/" activeClassName="Nav-link-active">
                    Home
                </NavLink>

                <NavLink to ="/about-me" activeClassName="Nav-link-active">
                    About
                </NavLink>

                <NavLink to ="/contact-me" activeClassName="Nav-link-active">
                    Contact
                </NavLink>

                <NavLink to ="/blog" activeClassName="Nav-link-active">
                    Blog
                </NavLink>
                
                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }
}
