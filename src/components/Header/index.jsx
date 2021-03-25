import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Register from 'features/Auth/components/Register';
import { Close } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Login from 'features/Auth/components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { AccountCircle } from '../../../node_modules/@material-ui/icons/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logOut } from 'features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#55ACEE',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  btn: {
    position: 'absolute',
    top: theme.spacing(0),
    right: theme.spacing(0),
  }
}));

const MODE = { 
  LOGIN: 'login',
  REGISTER: 'register'
}

export default function Header() {
  const dispatch = useDispatch();
  const getLoginId = useSelector(state => state.user.current);
  const isLoginId = !!getLoginId.id;

  const isLoginName = getLoginId.fullName;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles(MODE.LOGIN);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowUser = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseUser = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    const action = logOut();
    dispatch(action)
    window.location.reload(true);
  }

  const  [ mode , setMode ] = useState(MODE.LOGIN)
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shop Online
          </Typography>
          
          <NavLink className={classes.link} to="/" >
            <Button  color="inherit">Home</Button>
          </NavLink>
          <NavLink className={classes.link} to="/todo-list" >
            <Button  color="inherit">ToDo</Button>
          </NavLink>
          <NavLink className={classes.link} to="/albums" >
            <Button  color="inherit">Album</Button>
          </NavLink>
          <NavLink className={classes.link} to="/products" >
            <Button  color="inherit">Product</Button>
          </NavLink>

          {!isLoginId && (
             <Button onClick={handleClickOpen} color="inherit">Login</Button>
          )}
         
         {isLoginId && (
           <IconButton onClick={handleShowUser}>
              <AccountCircle/> 
              {isLoginName}
           </IconButton>
         )}
          
        
        </Toolbar>
      </AppBar>

      <Menu
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUser}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 50, left: 1060 }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>

      <Dialog 
      disableBackdropClick
      disableEscapeKeyDown
      open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogContent >
          {mode === MODE.REGISTER && (
              <>
                <Login handleOnClose={handleClose} />

                <Box textAlign='center'>
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                      Đăng kí tài khoản
                  </Button>
                </Box>
              </>
          )} 

          {mode === MODE.LOGIN && (
              <>
                <Register handleOnClose={handleClose} />

                <Box textAlign='center'>
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                      Đăng nhập
                  </Button>
                </Box>
              </>
          )} 

        </DialogContent>

        <DialogActions>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            <Close/>
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
