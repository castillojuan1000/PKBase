import React, { useState } from 'react'
import Select from './Select'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function PostForm() {
  const classes = useStyles();

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  // const [description, setDescription] = useState('');

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleUrl = (e) => {
    setUrl(e.target.value)
  }

  // const handleDescription = (e) => {
  //   setDescription(e.target.value)
  // }


  const handleSubmit = (e) => {
    e.preventDefault();

    const link = {
      createdAt: new Date(),
      category,
      title,
      url,
      // description,
    }

    console.log(link)
    setTitle('')
    setUrl('')
    // setDescription('')
  }

  return (

    <form
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Grid container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>

          <Select onChange={handleCategory} />

          <TextField

            label="Title"
            style={{ margin: 8 }}
            placeholder="Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            name="Title"
            value={title}
            onChange={handleTitle}
          />
          <TextField

            label="URL"
            style={{ margin: 8 }}
            placeholder="URL"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            name="URL"
            value={url}
            onChange={handleUrl}
          />
          {/* <TextField

            label="Description"
            style={{ margin: 8 }}
            placeholder="Description"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
            rows="2"
            name="content"
            value={description}
            onChange={handleDescription}
          /> */}


          <MyButton
            type="submit"
            value="Submit"
            color="blue"
          >
            Submit
          </MyButton>

        </Grid>
      </Grid>
    </form >

  )
}

//? textfieds 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 'auto ',
    maxWidth: "80%",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
}));

//?buttons
const styles = {
  root: {
    background: props =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: props =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 9,
    width: '100%'
  },
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

const MyButton = withStyles(styles)(MyButtonRaw);