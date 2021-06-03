import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';

export class DisplayList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let tableStyling = '100%';

    if (this.props.editVal > 0) {
      console.log('setting editVal')
      tableStyling = '20%' 
    } 

    if (this.props.listOfItems) {
      
      return (
        <table style={{opacity: tableStyling}}>
          {this.props.listOfItems.map((item, index) => (
            <ListItem key ={index}> 
              <tr>
                <td style = {{width:'30px'}}>{index + 1}</td>
                <td style = {{width:'200px'}}>{item}</td>
                <td style = {{width:'30px'}}><Button variant="contained" color="secondary" onClick={() => {this.props.deleteItem(index)}}>Remove</Button></td>
                <td style = {{width:'20px'}}></td>
                <td style = {{width:'30px', marginLeft: '20px'}}><Button variant="contained" color="secondary" onClick={() => {this.props.editItem(index)}}>Edit</Button></td>
              </tr>            
            </ListItem>
          ))}
        </table>
      )
    } else {
      return null
    }
  
  }
}

export default DisplayList