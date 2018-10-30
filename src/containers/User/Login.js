import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <Grid container>
          <Grid item xs={10} md={4} style={{margin:'0 auto'}}>
            <form>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="mobile">手机号</InputLabel>
                <Input id="mobile" name="mobile" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">密码</InputLabel>
                <Input name="password" type="password" id="password" />
              </FormControl>
              <div style={{marginTop:'16px',display:'flex',justifyContent:'space-between'}}>
                <Button type="submit" variant="contained" color="primary">登录</Button>
                <Button component={props=><Link {...props} to='/user/find-password'>{props.children}</Link>}>忘记密码</Button>
              </div>
            </form>

          </Grid>
        </Grid>
    )
  }
}

export default Login;