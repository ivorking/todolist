import React, { Component } from 'react'
import AddItem from './components/AddItem.js'

let newArray = []

class ToDoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listOfItems: []
    }

    this.updateItemList = this.updateItemList.bind(this)

  } 

  updateItemList(newItem) {
    newArray = this.state.listOfItems.push(newItem)
    this.setState({
      listOfItems: newArray
    })
    console.log(this.state.listOfItems)
  }

  render() {
    return (
      <div>
        <AddItem updateItemList={this.updateItemList}/>
      </div>
    )
  }

}

export default ToDoContainer;
