import {ThemeContext} from "../../context/ThemeContext";
import React, {Component} from 'react';

class Header extends Component {
    state = {
        darkTheme: false
    };
    render() {
        const {funcs, items} = this.props;
        const {sortByName, sortByCity, changeTheme} = funcs;
        return (
            <nav className="navbar navbar-dark bg-primary">
                <h1>Header</h1>
                <h2>{items}</h2>
                <a href="#" onClick={sortByName} className="btn btn-primary">Sort by name</a>
                <a href="#" onClick={sortByCity} className="btn btn-primary">Sort by city</a>
                <a href="#" onClick={changeTheme} className="btn btn-primary">Change Theme</a>
            </nav>
        );
    }
}

export default Header;