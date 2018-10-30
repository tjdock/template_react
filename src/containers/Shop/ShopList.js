import React, {Component, lazy, Suspense} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const ShopStart = lazy(() => import('./ShopStart'));
const ShopDetail = lazy(() => import('./ShopDetail'));

class ShopList extends Component {
  render() {
    return (
        <div>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <List>
                <ListItem button component={props => <Link to={this.props.match.url + '/123'} {...props}/>}>
                  <img src="http://placehold.it/70x70" alt=""/>
                  <ListItemText primary='primary' secondary='secondary'/>
                </ListItem>
                <ListItem button component={props => <Link to={this.props.match.url + '/456'} {...props}/>} selected={true}>
                  <img src="http://placehold.it/70x70" alt=""/>
                  <ListItemText primary='primary' secondary='secondary'/>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={8}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path={this.props.match.url} exact component={props => <ShopStart {...props}/>}/>
                  <Route path={this.props.match.url + '/:id'} component={props => <ShopDetail {...props}/>}/>
                </Switch>
              </Suspense>
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default ShopList;