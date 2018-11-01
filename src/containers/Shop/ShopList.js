import React, {Component, lazy, Suspense} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import MySnackbar from '../../components/MySnackbar/MySnackbar';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const ShopStart = lazy(() => import('./ShopStart'));
const ShopDetail = lazy(() => import('./ShopDetail'));

class ShopList extends Component {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   //console.log('next',nextProps.storeid);
  //   //console.log('this',this.props.storeid);
  //   //return nextProps.storeid !== this.props.storeid;
  //   //return nextProps.storeid !== this.props.storeid;
  //   return nextProps.storeid !== this.props.storeid;
  // }

  componentDidMount() {
    //console.log('componentDidMount')
    if (!this.props.shops) {
      this.props.onGetShops();
    }
  }

  render() {
    const loading = this.props.loading ? <CircularProgress/> : null;
    const error = this.props.error ? <MySnackbar message={this.props.error.message} variant='error'/> : null;
    return (
        <div>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              {error}
              {loading}
              <List>
                {
                  this.props.shops && this.props.shops.map(shop => {
                    return (
                        <ListItem key={shop.id} button selected={this.props.storeid === shop.id}
                                  component={props => <Link to={this.props.match.url + '/' + shop.id} {...props}/>}>
                          <img src={this.props.imgsite + shop.iconimg} alt="" style={{width: '70px', height: '70px'}}/>
                          <ListItemText primary={shop.address} secondary={shop.phone}/>
                        </ListItem>
                    )
                  })
                }
              </List>
            </Grid>
            <Grid item xs={8}>
              <Suspense fallback={<CircularProgress/>}>
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

const mapStateToProps = state => {
  return {
    loading: state.shop.loading,
    error: state.shop.error,
    shops: state.shop.shops,
    imgsite: state.shop.imgsite,
    storeid: state.shop.storeid
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetShops: () => dispatch(actions.getShops())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopList);