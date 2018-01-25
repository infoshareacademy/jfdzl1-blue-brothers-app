import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';
import FaCutlery from 'react-icons/lib/fa/cutlery'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import {init} from './state';

const mapStateToProps = state => ({
  locals: state.locals.list
});

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch(init())
});

class LocalsList extends Component {

  componentWillMount() {
    this.props.initData();
  }

  render() {
    return (
      <Grid item xs={9}>

        <div style={{textAlign: "center"}}>
        <Paper>
        <List>
          {this.props.locals.map(local => (
            <li key={local.id}>
              <Typography type="title" gutterBottom>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
              <Link to={`/local/${local.id}`}>{local.name}, {local.address}</Link>
              </Typography>
              <Divider />
            </li>
          ))}
        </List>
        </Paper>
      </div>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocalsList);
