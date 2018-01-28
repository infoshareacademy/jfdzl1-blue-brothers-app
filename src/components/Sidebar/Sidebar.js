import React from 'react';
import {connect} from 'react-redux';
import Link from '../Link';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import FaDaschbord from 'react-icons/lib/fa/dashboard';
import FaCutlery from 'react-icons/lib/fa/cutlery'
import FaPencil from 'react-icons/lib/fa/pencil'
import Stats from '../Stats';

import {toggleSidebar} from './../UI/state';

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
        <Divider/>
        <Link to="/list">
          <ListItem button>
            <ListItemIcon>
              <FaCutlery/>
            </ListItemIcon>
            <ListItemText primary="Locals"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/add">
          <ListItem button>
            <ListItemIcon>
              <FaPencil/>
            </ListItemIcon>
            <ListItemText primary="Add local"/>
          </ListItem>
        </Link>

        <Divider/>
        <Link to="/Stats">
          <ListItem button>
            <ListItemIcon>
              <FaPencil/>
            </ListItemIcon>
            <ListItemText primary="Stats"/>
          </ListItem>
        </Link>

      </List>
    </div>
  </Drawer>
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
