import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Signup extends Component {
  render() {
    return (
        <Grid container>
          <Grid item xs={12} md={8} style={{margin:'0 auto'}}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="name">姓名</InputLabel>
                  <Input id="name" name="name" />
                </FormControl>
              </Grid>
              <Grid item xs={6}> </Grid>
              <Grid item xs={6} style={{display:"flex",alignItems:'center'}}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="mobile">手机号</InputLabel>
                  <Input id="mobile" name="mobile" />
                </FormControl>
                <Button variant="contained" color="secondary">发送</Button>
              </Grid>
              <Grid item xs={6}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="code">短信验证码</InputLabel>
                  <Input id="code" name="code" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">密码</InputLabel>
                  <Input name="password" type="password" id="password" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="confirm-password">确认密码</InputLabel>
                  <Input name="confirm-password" type="password" id="confirm-password" />
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" style={{marginTop:'16px'}}>注册</Button>
          </Grid>
        </Grid>
    )
  }
}

export default Signup;