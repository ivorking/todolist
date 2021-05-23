import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button'

export class DisplayList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const divStyle = {
      columns: 2 auto;
    };

    if (this.props.listOfItems) {
      return (
        <table style={divStyle}>
          {this.props.listOfItems.map((item, index) => (
              <ListItem key={index}> 
                <tr>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td><Button variant="contained" color="secondary" onClick={() => {this.props.deleteItem(index)}}>Delete</Button></td>
                </tr>

            </ListItem>
))}
        </table>
      )
    } else {
      return
    }
  }
}

export default DisplayList
