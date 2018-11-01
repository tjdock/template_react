import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


class ShopDetail extends Component {
  state = {
    activeStep: 0,
    tutorialSteps: [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      }]
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };


  componentDidMount() {
    console.log('componentDidMount called twice', this.props.match.params.id);
    this.props.onGetShop(this.props.match.params.id);

  }
  // shouldComponentUpdate(nextProps, nextState, nextContext){
  //   console.log(nextProps.storeid!==this.props.storeid);
  //
  //   return false;
  // }

  render() {
    const {theme} = this.props;
    const {activeStep, tutorialSteps} = this.state;
    const maxSteps = tutorialSteps.length;


    return (
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <img src={tutorialSteps[activeStep].imgPath} style={{width: '100%'}}/>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                    Back
                  </Button>
                }
            />

          </Grid>
          <Grid item xs={6}>
            <p>店名：xxxx</p>
            <p>咨询电话：xxxx</p>
            <p>地址：xxxx</p>
            <div>html</div>
          </Grid>
        </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.shop.loading,
    error: state.shop.error,
    shop: state.shop.shop,
    imgsite: state.shop.imgsite,
    storeid:state.shop.storeid
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetShop: (id) => dispatch(actions.getShop(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(null, {withTheme: true})(ShopDetail));