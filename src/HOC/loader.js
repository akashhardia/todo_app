import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function LoaderHOC(props) {
  const {
    variant, color
  } = props

  return(
    <CircularProgress
      variant={ variant }
      color={ color }
    />
  ) 
}

export default LoaderHOC