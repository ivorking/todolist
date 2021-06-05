import React, { Component } from 'react'
import AddItem from './components/AddItem.js'
import DisplayList from './components/DisplayList.js'
import DisplayEdit from './components/DisplayEdit.js'
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/styles';


class ToDoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listOfItems: [],
      editVal: null
    }

    this.updateItemList = this.updateItemList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
    this.updateEditedItem = this.updateEditedItem.bind(this)

  }

  updateEditedItem(newValue) {
    let tempArray = this.state.listOfItems;
    tempArray[this.state.editVal] = newValue
    this.setState({
      listOfItems: tempArray,
      editVal: null
    })
  }

  updateItemList(newItem) {
    let newArray = this.state.listOfItems
    newArray.push(newItem)
    this.setState({
      listOfItems: newArray
    })
  }

  deleteItem(index) {
    let tempArray = this.state.listOfItems;
    tempArray.splice(index, 1)
    this.setState({
      listOfItems: tempArray
    })
  }

  editItem(index) {
    let tempVar = index;
    this.setState({
      editVal: tempVar
    })
  }

  render() {

    return (
      <div>
        <AddItem updateItemList={this.updateItemList}/>
        <h2>Your To Do's</h2>
        <DisplayList listOfItems={this.state.listOfItems} deleteItem={this.deleteItem} editItem={this.editItem} editVal={this.state.editVal}/>
        {(this.state.editVal) && <DisplayEdit editVal = {this.state.editVal} listOfItems={this.state.listOfItems} updateEditedItem={this.updateEditedItem}/>}
      </div>
    )

  }

}

export default ToDoContainer;
