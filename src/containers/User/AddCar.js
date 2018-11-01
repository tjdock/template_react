import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";
import Avatar from '@material-ui/core/Avatar';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography/Typography";

class AddCar extends Component {
  render() {
    return (
        <Grid container>
          <Grid item xs={2}>
            <TextField placeholder='搜索品牌'/>
            <List>
              <ListItem button>
                <Avatar src='http://placehold.it/70x70'/>
                <ListItemText primary='primary' />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}>
            <TextField placeholder='搜索车型'/>
            <List>
              <ListItem button>
                <ListItemText primary='primary' />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}>
            <TextField placeholder='搜索排量'/>
            <List>
              <ListItem button>
                <ListItemText primary='primary' />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}>
            <TextField placeholder='搜索年份'/>
            <List>
              <ListItem button>
                <ListItemText primary='primary' />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}>
            <TextField placeholder='搜索车型'/>
            <List>
              <ListItem button>
                <ListItemText primary='primary' />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography gutterBottom variant="h6" component="h5">阿斯顿·马丁-DB11</Typography>
            <TextField placeholder='车架号' margin='normal'/>
            <TextField placeholder='车牌号' margin='normal'/>
            <Button variant='contained' color='primary'>添加</Button>
          </Grid>
        </Grid>
    )
  }
}

export default AddCar;