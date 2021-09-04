import React from 'react';
import { NavLink } from 'react-router-dom';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import './NavBar.css';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }


    render() {
        return (
            <>
                <div className="nav-bar">
                    <NavLink exact className="nav-link"  to={!this.state.disabled ? '/' : ""}>Pathfinding Algoritms</NavLink>
                    <NavLink exact className="nav-link"  to={!this.state.disabled ? '/sortingvisualizer' : ""}>Sorting Algorithms</NavLink>
                </div>
            </>
        );
    }
}