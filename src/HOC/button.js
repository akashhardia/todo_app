import React from 'react'
import { Button } from '@material-ui/core';

function ButtonHOC(props) {
  const {
    variant, color, className, type, form, buttonText
  } = props

  return(
    <Button
      variant={ variant }
      color={ color }
      className={ className }
      type={ type }
      form={ form }
    >
      { buttonText }
    </Button>
  ) 
}

export default ButtonHOC