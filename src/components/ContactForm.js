import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: 40,
    padding: "0px 30px",
    margin: "10px",
  },
  ma3: {
    margin: "10px",
    label: "message",
    type: "text",
  },
});

export default function SliderContact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const [showErrors, setShowErrors] = useState(false);

  const classes = useStyles();

  return (
    <Fragment>
      <div className="contactForm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <h1 data-aos="fade">Contact Form</h1>
            </div>
          </div>
          <form data-aos="slide-down">
            <div className="row">
              <div className="wb mb-2 col-lg-3 col-sm-12">
                <TextField
                  className={`${classes.ma3}`}
                  label="Name"
                  type="text"
                  onChange={(e) => setName({ name: e.target.value })}
                />
              </div>
              <div className="wb mb-2 col-lg-3 col-sm-12">
                <TextField
                  className={`${classes.ma3}`}
                  label="Email"
                  type="email"
                  onChange={(e) => setEmail({ email: e.target.value })}
                />
              </div>
              <div className="wb mb-2 col-lg-3 col-sm-12">
                <TextField
                  className={`${classes.ma3}`}
                  label="Subject"
                  type="text"
                  onChange={(e) => setSubject({ subject: e.target.value })}
                />
              </div>
              <div className="wb mb-2 col-lg-3 col-sm-12">
                <TextField
                  className={`${classes.ma3}`}
                  label="Message"
                  type="text"
                  onChange={(e) => setMessage({ message: e.target.value })}
                />
              </div>
              <div className="col mt-4">
                <Button className={classes.root}> Submit </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
