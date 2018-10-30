import React, {Component, lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const Home = lazy(() => import('./containers/Home'));
const ShopList = lazy(() => import('./containers/Shop/ShopList'));
const Login = lazy(() => import('./containers/User/Login'));
const Signup = lazy(() => import('./containers/User/Signup'));
const EditPassword = lazy(() => import('./containers/User/EditPassword'));
const FindPassword = lazy(() => import('./containers/User/FindPassword'));
const AddCar = lazy(() => import('./containers/User/AddCar'));
const MyCars = lazy(() => import('./containers/User/MyCars'));

class App extends Component {


  render() {
    return (
        <div>
          <Navigation/>
          <div className='centerLayout padding my'>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/' exact component={props=><Home {...props}/>}/>
                <Route path='/shop' component={props=><ShopList {...props}/>}/>
                <Route path='/user/login' component={props=><Login {...props}/>}/>
                <Route path='/user/signup' component={props=><Signup {...props}/>}/>
                <Route path='/user/edit-password' component={props=><EditPassword {...props}/>}/>
                <Route path='/user/find-password' component={props=><FindPassword {...props}/>}/>
                <Route path='/user/add-car' component={props=><AddCar {...props}/>}/>
                <Route path='/user/my-cars' component={props=><MyCars {...props}/>}/>
                <Route render={() => <p>Page Not Found</p>}/>
              </Switch>
            </Suspense>
          </div>
        </div>
    );
  }
}

export default App;
