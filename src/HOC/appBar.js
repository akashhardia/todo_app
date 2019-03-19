import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function AppBarHOC(props) {
  const {
    position, color, appBarText
  } = props

  return(
    <AppBar 
      position={ position } 
      color={ color }
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          color="inherit"
        >
          { appBarText }
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarHOC