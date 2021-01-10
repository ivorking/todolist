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
      console.log(this.props.listOfItems[0])
      return (
        <div>
          {this.props.listOfItems.map((item, index) => (
            <ListItem key={index}>{index} {item}
              <Button variant="contained" color="primary">Delete</Button>
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
