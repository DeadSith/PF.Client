import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    
<TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="Pensioner`s name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          helperText="Some important text"
        />

  );
}
