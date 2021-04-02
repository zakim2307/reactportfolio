import stuff from "./stuffs1.jpg";
import stuff2 from "./stuffs2.jpg";
import stuff3 from "./stuffs3.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ImageCarousel() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid data-aos="flip-up" data-aos-duration="1000" item xs={4}>
          <Paper className={classes.paper}>
            <img className="img-fluid" src={stuff} alt="img" />
          </Paper>
        </Grid>
        <Grid data-aos="slide-up" data-aos-duration="1000" item xs={4}>
          <Paper className={classes.paper}>
            <img className="img-fluid" src={stuff2} alt="img" />
          </Paper>
        </Grid>
        <Grid data-aos="fade" data-aos-duration="1000" item xs={4}>
          <Paper className={classes.paper}>
            <img className="img-fluid" src={stuff3} alt="img" />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <h1>Welcome To Gallary</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
