import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

export class DisplayList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.listOfItems) {

      if (this.props.editVal !== null) {

        return (
          <div>
            <table style={{opacity: '20%'}}>
              {this.props.listOfItems.map((item, index) => (
                <ListItem key ={index}> 
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td><Button variant="contained" color="secondary">Remove</Button></td>
                    <td/>
                    <td><Button variant="contained" color="secondary"> Edit </Button></td>
                    <td></td>
                    <td>
                      <Button variant="contained" color="secondary" color="secondary" onClick={() => {this.props.moveItemUp(index)}}>
                        <ArrowUpwardRoundedIcon />
                      </Button>
                    </td>
                    <td/>
                    <td>
                      <Button variant="contained" color="secondary" color="secondary" onClick={() => {this.props.moveItemDown(index)}}>
                        <ArrowDownwardRoundedIcon />
                      </Button>
                    </td>     
                  </tr>            
                </ListItem>
              ))}
            </table>
          </div>
        )

      } else {
  
        return (
          <div>
            <table style={{opacity: '100%'}}>
              {this.props.listOfItems.map((item, index) => (
                <ListItem key ={index}> 
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td><Button variant="contained" color="secondary" onClick={() => {this.props.deleteItem(index); }}>Remove</Button></td>
                    <td/>
                    <td><Button variant="contained" color="secondary" onClick={() => {this.props.editItem(index)}}>Edit</Button></td>
                    <td/>
                    <td>
                      <Button variant="contained" color="secondary" color="secondary" onClick={() => {this.props.moveItemUp(index)}}>
                        <ArrowUpwardRoundedIcon />
                      </Button>
                    </td>
                    <td/>
                    <td>
                      <Button variant="contained" color="secondary" color="secondary" onClick={() => {this.props.moveItemDown(index)}}>
                        <ArrowDownwardRoundedIcon />
                      </Button>
                    </td>                  
                  </tr>            
                </ListItem>
              ))}
            </table>
          </div>
        )

      }

    } else {
      return null
    }
  
  }
}

export default DisplayList