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
              checked={state.velas}
              onChange={handleChange}
              name="velas"
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
              checked={state.oraculos}
              onChange={handleChange}
              name="oraculos"
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
              checked={state.cursos}
              onChange={handleChange}
              name="cursos"
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
              checked={state.cuarzos}
              onChange={handleChange}
              name="cuarzos"
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
              checked={state.joyeria}
              onChange={handleChange}
              name="joyeria"
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
