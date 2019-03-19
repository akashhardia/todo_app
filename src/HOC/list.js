import React from 'react'
import List from '@material-ui/core/List'
import { ListItem } from '@material-ui/core'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

function MyListItem( props ) {
  const {
    task, onDelete
  } = props
  
  return (
    <ListItem>
      <ListItemText
        primary={ task.taskName }        
      />
      <ListItemSecondaryAction>
        <IconButton 
          aria-label="Delete"
          onClick={ () => { onDelete(task) } }
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

function ListHOC(props) {
  const { 
    list, onDelete
  } = props

  return(
    <List>
      { list.map(task => (
        <MyListItem
          task={ task }
          key={ task.id }
          onDelete={ onDelete }
        />
      )) }
    </List>
  ) 
}

export default ListHOC