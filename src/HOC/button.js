import React from 'react'
import { Button } from '@material-ui/core';

function ButtonHOC(props) {
  const {
    variant, color, className, type, form, buttonText, to, component
  } = props

  return(
    <Button
      variant={ variant }
      color={ color }
      className={ className }
      type={ type }
      form={ form }
      to={ to }
      component={ component }
    >
      { buttonText }
    </Button>
  ) 
}

export default ButtonHOC