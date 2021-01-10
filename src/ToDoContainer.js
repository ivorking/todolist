import React, { Component } from 'react'
import AddItem from './components/AddItem.js'

class ToDoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listOfItems: []
    }

  }



  render() {
    return (
      <div>
        <AddItem listOfItems={this.listOfItems}/>
      </div>
    )
  }

}

export default ToDoContainer;
