import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class DisplayEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newEditingValue: ""
    }

    this.handleChangeDisp = this.handleChangeDisp.bind(this);
    this.keyPress = this.keyPress.bind(this)

  }

  componentWillMount() {
    this.state.newEditingValue = this.props.listOfItems[this.props.editVal]
  }

  handleChangeDisp(e) {
    let fieldValue = e.target.value
    this.setState({
      newEditingValue: fieldValue
    })
  }

  keyPress(e) {
    console.log(e.keyCode)
    if (e.keyCode == 13) {
      this.props.updateEditedItem(this.state.newEditingValue)
    }
  }

  render() {

    console.log('in DisplayEdit')
    
    return (
      <div>

        <TextField 
          type="text" 
          label="Editing your To Do" 
          variant="outlined" 
          value={this.state.newEditingValue} 
          onChange={this.handleChangeDisp}
          onKeyDown={this.keyPress} 
          style={{margin: 20}}
        />

        <Button style={{ display: 'block', marginLeft: 20 }} variant="contained" color="primary" onClick={() => {this.props.updateEditedItem(this.state.newEditingValue)}}>
          Done
        </Button>

      </div>
    )
  }

}

export default DisplayEdit