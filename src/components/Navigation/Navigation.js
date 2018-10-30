import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import { withRouter,NavLink} from 'react-router-dom';


class ButtonLink extends React.Component {
  renderLink = itemProps => <NavLink {...itemProps} avtiveclassname='active'/>;

  render() {
    return (
        <Button {...this.props} component={this.renderLink}>{this.props.children}</Button>
    );
  }
}

class Navigation extends Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleMenu = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };
  handleClose = () => {
    this.setState({anchorEl: null})
  };
  editPasswordNavHandler = () => {
    this.props.history.push('/user/edit-password');
    this.handleClose();
  };
  addCarNavHandler = () => {
    this.props.history.push('/user/add-car');
    this.handleClose();
  };
  myCarsNavHandler = () => {
    this.props.history.push('/user/my-cars');
    this.handleClose();
  };

  render() {
    const {auth, anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
        <AppBar position='sticky' color='default'>
          <Toolbar className='centerLayout'>
            <Typography variant='h6' color='inherit'>Logo</Typography>
            <ButtonLink to='/' exact>首页</ButtonLink>
            <ButtonLink to='/shop'>门店列表</ButtonLink>
            <span style={{flexGrow: 1}}> </span>
            <ButtonLink to='/user/signup'>注册</ButtonLink>
            <ButtonLink to='/user/login'>登录</ButtonLink>
            {
              auth && (
                  <div>
                    <Button color='inherit' onClick={this.handleMenu}
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup='true'>admin</Button>
                    <Menu id='menu-appbar'
                          anchorEl={anchorEl}
                          open={open} onClose={this.handleClose}>
                      <MenuItem onClick={this.myCarsNavHandler}>我的车库</MenuItem>
                      <MenuItem onClick={this.addCarNavHandler}>添加爱车</MenuItem>
                      <MenuItem onClick={this.editPasswordNavHandler}>修改密码</MenuItem>
                      <Divider/>
                      <MenuItem onClick={this.handleClose}>注销</MenuItem>
                    </Menu>
                  </div>
              )
            }
          </Toolbar>
        </AppBar>
    )
  }
}

export default withRouter(Navigation);