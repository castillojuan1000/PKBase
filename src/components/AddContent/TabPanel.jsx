import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { orange } from '@material-ui/core/colors';

import PostForm from './PostForm'
import ImageForm from './ImageForm'
import LinkForm from './LinkForm'



function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>

          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: orange[200],
    width: '45%',
    borderRadius: 5,
    margin: '10vh auto'
  },
  appbar: {
    backgroundColor: orange[400],


  },

}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="posts types"

        >
          <Tab label="Post" {...a11yProps(0)} />
          <Tab label="Image" {...a11yProps(1)} />
          <Tab label="Link" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          <PostForm />
        </TabPanel>


        <TabPanel value={value} index={1} dir={theme.direction}>
          <ImageForm />
        </TabPanel>


        <TabPanel value={value} index={2} dir={theme.direction}>
          <LinkForm />
        </TabPanel>

      </SwipeableViews>
    </div>
  );
}