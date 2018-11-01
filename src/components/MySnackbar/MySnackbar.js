import React, {Component} from 'react';
import classNames from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import {withStyles} from '@material-ui/core/styles';

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});


function MySnackbarContent(props) {
  //四种类型
  const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  const {classes, className, message, onClose, variant, ...other} = props;
  const Icon = variantIcon[variant];

  return (
      <SnackbarContent
          className={classNames(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)}/>
              {message}
        </span>
          }
          action={[
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={onClose}>
              <CloseIcon className={classes.icon}/>
            </IconButton>,
          ]}
          {...other}
      />
  );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class MySnackbar extends Component {
  state = {
    open: true
  };
  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
        <Snackbar
            anchorOrigin={{vertical: 'top',horizontal: 'center'}}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}>
          <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant={this.props.variant}
              message={this.props.message}/>
        </Snackbar>
    )
  }
}

export default MySnackbar;