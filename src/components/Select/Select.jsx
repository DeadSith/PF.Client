import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gender: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Gender
         </InputLabel> 
        <Select
          native
          value={state.gender}
          variant="outlined"
          label="Gender"
          placeholder="Gender"
          className={classes.formControl}
          onChange={handleChange('gender')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'gender',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value="" />
          <option value={"f"}>Female</option>
          <option value={"m"}>Male</option>
        </Select>
      </FormControl>
      
    </div>
  );
}
