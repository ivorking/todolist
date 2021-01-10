import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export class AddItem extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      newItem: ""
    }

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this)

  }

  addItem(e) {
    console.log('here we go:', newItem)
  }

  handleChange(e) {
    newItem = e.target.value
    console.log(newItem)
  }

  render() {
    return (
      <div>
        <TextField type="text" label='Type your item here' variant="outlined" onChange={this.handleChange} style={{margin: 20}}></TextField>
        <Button style={{ display: 'block', marginLeft: 20 }} variant="contained" color="primary" onClick={this.addItem}>
          Add item
        </Button>
      </div>
    )
  }
}

export default AddItem
