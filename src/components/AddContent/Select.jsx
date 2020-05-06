import React from "react";
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

export default function NativeSelects({ onChange }) {
  const classes = useStyles();

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Select a category
        </InputLabel>
        <Select
          native
          onChange={onChange}
          label="Select a category"
          inputProps={{
            name: "Select a category",
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
