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

  }

  componentWillMount() {
    this.state.newEditingValue = this.props.listOfItems[this.props.editVal - 1]
    console.log('mounting', this.state.newEditingValue)
  }

  handleChangeDisp(e) {
    this.newEditingValue = e.target.value
    this.setState({
      newEditingValue: this.newEditingValue
    })
  }

  render() {

    return (
      <div>

        <TextField 
          type="text" 
          label="Editing your To Do" 
          variant="outlined" 
          value={this.state.newEditingValue} 
          onChange={this.handleChangeDisp} 
          // onKeyDown={this.keyPress}
        />

        <Button style={{ display: 'block', marginLeft: 20 }} variant="contained" color="primary" onClick={this.addItem}>
          Done
        </Button>

      </div>
    )
  }

}

export default DisplayEdit