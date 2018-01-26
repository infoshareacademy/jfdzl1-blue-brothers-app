import React, {Component} from 'react';
import Link  from '../Link';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import {init} from './state';

const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 20,
    padding: 16
  }
}

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
      <Grid item xs={12}>
        <Paper style={styles.paper}>
          <List>
            {this.props.locals.map(local => (
              <div>
                <ListItem key={local.id} button>
                  <Link to={`/local/${local.id}`}>
                    <ListItemText primary={`${local.name}, ${local.address}`}/>
                  </Link>
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Add to favorites">
                      <StarIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Paper>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocalsList);
