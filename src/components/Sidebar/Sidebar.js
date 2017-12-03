import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <div>
                Sidebar
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stats">Stats</Link></li>

            </div>
        )
    }
}

export default Sidebar;