import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Appbar extends Component {
    render() {
        return (
            <div className="appbar">
                <div className="appbar-top">
                    <p>Appbar</p>
                    <ul className="appbar-item-wrapper">
                        <li className="appbar-item">
                            <Link className="appbar-link" to="/path1">Link 1</Link>
                        </li>
                        <li className="appbar-item">
                            <Link className="appbar-link" to="/path2">Link 2</Link>
                        </li>
                        <li className="appbar-item">
                            <Link className="appbar-link" to="/path3">Link 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Appbar;