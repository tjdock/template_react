import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

class MyCars extends Component {
  render() {
    return (
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <Card>
              <CardMedia
                  style={{height: '273px', width: '100%'}}
                  image="http://placehold.it/273x273"
                  title="Contemplative Reptile"/>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h4">阿斯顿·马丁-DB11</Typography>
                <Typography variant="subtitle1" color="textSecondary">车牌号：63</Typography>
                <Typography component="p">2016款 5.2T 手自一体 首发版</Typography>
              </CardContent>
              <CardActions style={{display:'flex',justifyContent:'space-between'}}>
                <FormControlLabel value="female" control={<Radio />} label="默认" />
                <Button size="small" color="secondary" variant='contained'>删除</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
    )
  }
}

export default MyCars;