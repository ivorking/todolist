import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button'


export class DisplayList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.listOfItems) {
      console.log('entering')
      return (
        <div>
          {this.props.listOfItems.map((item, index) => (
            <ListItem key={index}> 
              <Button variant="contained" color="secondary" onClick={this.props.deleteItem(index)}>Delete</Button>
            </ListItem>
          ))}
        </div>
      )
    } else {
      return
    }
  }
}

export default DisplayList
