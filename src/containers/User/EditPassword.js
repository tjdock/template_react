import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


class EditPassword extends Component {
  render() {
    return (
        <Grid container>
          <Grid item xs={10} md={4} style={{margin:'0 auto'}}>
            <form>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="oldPwd">原始密码</InputLabel>
                <Input id="oldPwd" type="password" name="oldPwd" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="onePwd">新密码</InputLabel>
                <Input id="onePwd" type="password" name="onePwd" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="twoPwd">确认密码</InputLabel>
                <Input id="twoPwd" type="password" name="twoPwd" />
              </FormControl>
              <Button type="submit" variant="contained" color="primary" style={{marginTop:'16px'}}>修改</Button>
            </form>

          </Grid>
        </Grid>
    )
  }
}

export default EditPassword;