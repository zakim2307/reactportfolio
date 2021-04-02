import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box data-aos="fade-up" className={classes.root} display="flex" alignItems="center">
      <Box minWidth={`20%`}>
        <Typography variant="body2" color="textSecondary">
          {props.title}
        </Typography>
      </Box>
      <Box width="100%">
        <Box width="100%" mr={3}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingBottom: "20px",
  },
  bhk1: {
    flexDirection: "row",
  },
});

export default function Progress(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.value ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel title={props.title} value={progress} />
    </div>
  );
}
