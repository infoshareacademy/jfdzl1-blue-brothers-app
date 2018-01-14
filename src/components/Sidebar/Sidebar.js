import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Link to="/" className="sidebar-brand">
                    {/* <img src="logo.svg" className="sidebar-logo" />*/}
                </Link>

                <div className="sidebar-left">
                    <p>Sidebar</p>
                    <ul className="sidebar-item-wrapper">
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/path1">Link 1</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/path2">Link 2</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/path3">Link 3</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }



}

export default Sidebar;