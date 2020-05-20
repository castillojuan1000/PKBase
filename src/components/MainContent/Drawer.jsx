import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



import { CSS } from './CSS'
import { Interview } from './Interview'
import { JavaScript } from './JavaScript'
import { ReactComponent } from './React'
import { ToLearn } from './ToLearn'
import AddContent from '../AddContent/AddContent'


import { Switch, Link, Route } from 'react-router-dom'

// window.onresize = dispalayWindowsize;
// window.onload = dispalayWindowsize;


// function dispalayWindowsize() {
//   return window.innerWidth
// }


const drawerWidth = 240


export default function PersistantDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false)
  }

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });


  const LinkStyle = {
    textDecoration: "none",
    color: 'black',
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            {open && windowWidth < 450 ? 'PKB' : 'Personal Knowledge Base'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/addContent' style={LinkStyle}>

            <ListItem button onClick={closeDrawer}>
              <ListItemIcon> <img src="https://img.icons8.com/nolan/45/add.png" alt='add' /></ListItemIcon>
              <ListItemText primary={'Add Content'} />
            </ListItem>
          </Link>

          <Link to='/' style={LinkStyle}>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon><img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png" alt="javascript" /></ListItemIcon>
              <ListItemText primary={'JavaScript'} />
            </ListItem>
          </Link>

          <Link to='/react' style={LinkStyle}>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon> <img src="https://img.icons8.com/nolan/45/react-native.png" alt='react' /></ListItemIcon>
              <ListItemText primary={'React'} />
            </ListItem>

          </Link>

          <Link to='/css' style={LinkStyle}>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon> <img src="https://img.icons8.com/dusk/40/000000/css3.png" alt='css' /></ListItemIcon>
              <ListItemText primary={'CSS'} />
            </ListItem>
          </Link>

          <Link to='/interview' style={LinkStyle}>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon> <img src="https://img.icons8.com/nolan/45/talk-male.png" alt='interview' /></ListItemIcon>
              <ListItemText primary={'Interview'} />
            </ListItem>
          </Link>

          <Link to='/tolearn' style={LinkStyle}>
            <ListItem button onClick={closeDrawer}>
              <ListItemIcon><img src="https://img.icons8.com/bubbles/45/000000/learning.png" alt='learning' /></ListItemIcon>
              <ListItemText primary={'To Learn'} />
            </ListItem>
          </Link>

        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route exact path='/' component={JavaScript} />
          <Route exact path='/addContent' component={AddContent} />
          <Route exact path='/react' component={ReactComponent} />
          <Route exact path='/css' component={CSS} />
          <Route exact path='/interview' component={Interview} />
          <Route exact path='/tolearn' component={ToLearn} />
        </Switch>

      </main>
    </div>
  );
}

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
