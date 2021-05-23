import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export class DisplayList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.listOfItems) {
      return (
        <table>
<tbody>

            {this.props.listOfItems.map((item, index) => (
              <ListItem key={index}> 
                <tr>
                    <td style={{width: '30%'}}>{index + 1}</td>
                    <td style={{width: '30%'}}>{item}</td>
                    <td style={{width: '30%'}}><Button variant="contained" color="secondary" onClick={() => {this.props.deleteItem(index)}}>Delete</Button></td>
                </tr>            
              </ListItem>
            ))}
</tbody>
        </table>
      )
    } else {
      return
    }
  }
}

export default DisplayList
