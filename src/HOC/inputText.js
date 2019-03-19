import React from 'react'
import TextField from '@material-ui/core/TextField'

function TextFieldHOC(props) {
  const {
    className, type, placeholder, query, onChange, error, required, name
  } = props

  return(
    <TextField
      className={ className }
      fullWidth
      type={ type }
      value={ query }
      placeholder={ placeholder }
      onChange={ onChange }
      error={ error }
      required={ required }
      name={ name }
    />
  ) 
}

export default TextFieldHOC