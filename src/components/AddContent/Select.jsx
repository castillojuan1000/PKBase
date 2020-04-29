import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = event => {
    setCategory(event.target.value);
  };


  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Choose a category
        </InputLabel>
        <Select
          native
          value={category}
          onChange={handleChange}
          label="Choose a category"
          inputProps={{
            name: "Choose a category",
            id: "outlined-age-native-simple"
          }}
        >
          <option aria-label="None" value="" />
          <option value={"React"}>React</option>
          <option value={"JavaScript"}>JavaScript</option>
          <option value={"CSS"}>CSS</option>
          <option value={"Interview"}>Interview</option>
          <option value={"Learn"}>Learn</option>
        </Select>
      </FormControl>
    </>
  );
}
