import { React } from "react";
import { Checkbox, FormGroup, FormControlLabel, Paper } from "@material-ui/core";
import useStyles from "./styles";

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
              aria-describedby= "checkbox para filtrar las categorias "
              aria-checked="false"
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
              aria-describedby= "checkbox para filtrar las categorias "
              aria-checked="false"
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
              aria-describedby= "checkbox para filtrar las categorias "
              aria-checked="false"
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
              aria-describedby= "checkbox para filtrar las categorias "
              aria-checked="false"
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
              aria-describedby= "checkbox para filtrar las categorias "
              aria-checked="false"
            />
          }
          label="joyería"
        />
  </Paper>
    </FormGroup>
  );
};

export default FilterStore;
