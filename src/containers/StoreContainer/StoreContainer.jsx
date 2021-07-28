import React, { useState } from "react";
import BannerStore from "../../components/BannerStore";
import List from "../../components/List";
import FilterStore from "../../components/FilterStore";
import { Grid } from "@material-ui/core";
import { featuredProductsMockup } from "../../utils/constants";
import useStyles from "./styles";

const StoreContainer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
  });

  const handleChange = (event) => {
    const newState = { ...state };
    newState[event.target.name] = event.target.checked;
    setState(newState);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <BannerStore className={classes.banner}/>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <FilterStore state={state} handleChange={handleChange} className={classes.filter}/>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <List list={featuredProductsMockup} className={classes.list}/>
      </Grid>
    </Grid>
  );
};

export default StoreContainer;
