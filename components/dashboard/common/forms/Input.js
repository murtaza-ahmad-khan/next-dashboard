import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useFormikContext } from "formik";

const useStyles = makeStyles({
  field: {
    " & fieldset": {
      borderRadius: 15,
    },
    marginBottom: 20,
  },
});

export default function Input({
  label,
  name,
  field = "input",
  variant = "outlined",
  ...props
}) {
  const classes = useStyles();
  const { values, errors, touched, handleChange } = useFormikContext();

  if (field === "select") {
    return (
      <Select
        variant={variant}
        label={label}
        name={name}
        className={classes.field}
        error={errors[name] && touched[name]}
        helperText={touched[name] && errors[name]}
        value={values[name]}
        onChange={handleChange}
        {...props}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem value="Ten">Ten</MenuItem>
      </Select>
    );
  }

  return (
    <TextField
      variant={variant}
      label={label}
      name={name}
      className={classes.field}
      error={errors[name] && touched[name]}
      helperText={touched[name] && errors[name]}
      value={values[name]}
      onChange={handleChange}
      {...props}
    />
  );
}
