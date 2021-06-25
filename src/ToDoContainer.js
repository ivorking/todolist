import React, { Component } from 'react'
import '@fontsource/roboto';
import './App.css';
import Button from '@material-ui/core/Button';
import DisplayList from './components/DisplayList.js'
import AddItem from './components/AddItem.js'
import DisplayEdit from './components/DisplayList.js'
import { StylesProvider } from '@material-ui/core/styles';

class ToDoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listOfItems: [],
      editVal: null,
      isLoggedIn: false
    }

    this.updateItemList = this.updateItemList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
    this.updateEditedItem = this.updateEditedItem.bind(this)
    this.moveItemUp = this.moveItemUp.bind(this)
    this.moveItemDown = this.moveItemDown.bind(this)

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
    }, () => {
      console.log('this.state.editVal:', this.state.editVal)    
    })
  }

  moveItemUp(index) {
    if (index != 0) {
      let tempArray = this.state.listOfItems;
      [tempArray[index], tempArray[index - 1]] = [tempArray[index - 1], tempArray[index]]
      this.setState({
        listOfItems: tempArray
      })
    }
  }

  moveItemDown(index) {
    let tempArray = this.state.listOfItems;
    if (tempArray.length != (index + 1)) {
      [tempArray[index], tempArray[index + 1]] = [tempArray[index + 1], tempArray[index]]
      this.setState({
        listOfItems: tempArray
      })
    }
  }

  render() {

    return (
      <div>
        <StylesProvider injectFirst>
        <AddItem updateItemList={this.updateItemList}/>
        {this.state.isLoggedIn ? 
          <Button variant="contained" className="testStyle">Logged In</Button>
          :
          <Button variant="contained" className="testStyle">Log In</Button>
        }
        <h2>Your To Do's</h2>

        <DisplayList listOfItems={this.state.listOfItems} deleteItem={this.deleteItem} editItem={this.editItem} editVal={this.state.editVal} moveItemUp={this.moveItemUp} moveItemDown={this.moveItemDown}/>
        {this.state.editVal !== null &&
          <DisplayEdit editVal = {this.state.editVal} listOfItems={this.state.listOfItems} updateEditedItem={this.updateEditedItem}/>
        }
        </StylesProvider>
      </div>
    )

  }

}

export default ToDoContainer;
