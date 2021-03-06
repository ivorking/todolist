import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export class AddItem extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      newItem: "",
      label: "Type your To Do here"
    }

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.keyPress = this.keyPress.bind(this)

  }

  addItem(e) {
    this.props.updateItemList(this.newItem)
    this.setState({
      newItem: "",
      label: "Add another To Do"
    })
  }

  handleChange(e) {
    this.newItem = e.target.value
    this.setState({
      newItem: this.newItem
    })
  }

  keyPress(e) {
    if(e.keyCode == 13){
      this.props.updateItemList(this.newItem)
      this.setState({
        newItem: "",
        label: "Add another To Do"
      })
    }
  }

  render() {

    return (
      <div>
        <TextField 
          type="text" 
          label={this.state.label} 
          variant="outlined" 
          value={this.state.newItem} 
          onChange={this.handleChange} 
          onKeyDown={this.keyPress}
          style={{margin: 20}}
        />
        <Button style={{ display: 'block', marginLeft: 20 }} variant="contained" color="primary" onClick={this.addItem}>
          Add item
        </Button>
      </div>
    )
  }
}

export default AddItem;