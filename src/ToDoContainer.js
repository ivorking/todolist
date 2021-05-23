import React, { Component } from 'react'
import AddItem from './components/AddItem.js'
import DisplayList from './components/DisplayList.js'

class ToDoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listOfItems: []
    }

    this.updateItemList = this.updateItemList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

  } 
  updateItemList(newItem) {
    let newArray = this.state.listOfItems
    console.log('newArray is', newArray)
    newArray.push(newItem)
    console.log('newArray is', newArray)
    this.setState({
      listOfItems: newArray
    })
    console.log(this.state.listOfItems)
  }

  deleteItem(index) {
    let tempArray = this.state.listOfItems;
    tempArray.splice(index, 1)
    this.setState({
      listOfItems: tempArray
    })
  }

  render() {

    return (
      <div>
        <AddItem updateItemList={this.updateItemList}/>
        <DisplayList listOfItems={this.state.listOfItems} deleteItem={this.deleteItem}/>
      </div>
    )
  }

}

export default ToDoContainer;
