import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import FaDaschbord from 'react-icons/lib/fa/dashboard';
import FaCutlery from 'react-icons/lib/fa/cutlery'
import FaPencil from 'react-icons/lib/fa/pencil'

import {toggleSidebar} from './../../UI/logic';

const mapStateToProps = state => ({
  open: state.ui.sidebar.open
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

const Sidebar = (props) => (
  <Drawer open={props.open} onClose={props.toggleSidebar}>
    <div
      tabIndex={0}
      role="button"
      onClick={props.toggleSidebar}
      onKeyDown={props.toggleSidebar}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <FaDaschbord/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </Link>
        <Link to="/list">
          <ListItem button>
            <ListItemIcon>
              <FaCutlery/>
            </ListItemIcon>
            <ListItemText primary="Locals"/>
          </ListItem>
        </Link>
        <Link to="/add">
          <ListItem button>
            <ListItemIcon>
              <FaPencil/>
            </ListItemIcon>
            <ListItemText primary="Add local"/>
          </ListItem>
        </Link>
      </List>
    </div>
  </Drawer>
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
