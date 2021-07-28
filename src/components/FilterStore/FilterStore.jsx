import { React } from "react";
import useStyles from "./styles";
import { Checkbox, FormGroup, FormControlLabel, Paper } from "@material-ui/core";

const FilterStore = (props) => {
  const { state, handleChange } = props;
  const classes = useStyles();

  return (
    <FormGroup className={classes.root}>
      <Paper className={classes.filterContainer}>
        <legend>categorías</legend>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="secondary"
            />
          }
          label="velas"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="secondary"
            />
          }
          label="oráculos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="secondary"
            />
          }
          label="cursos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              color="secondary"
            />
          }
          label="cuarzos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
              color="secondary"
            />
          }
          label="joyería"
        />
  </Paper>
    </FormGroup>
  );
};

export default FilterStore;
