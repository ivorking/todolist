import React, { Component } from 'react'
import AddItem from './components/AddItem.js'
import DisplayList from './components/DisplayList.js'
import DisplayEdit from './components/DisplayEdit.js'
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';


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
    console.log('edit clicked', index);
    let tempVar = index + 1;
    this.setState({
      editVal: tempVar
    })
  }

  render() {

    return (
      <div>
        <AddItem updateItemList={this.updateItemList}/>
        <h2>Your To Do's</h2>
        <DisplayList listOfItems={this.state.listOfItems} editVal={this.state.editVal} deleteItem={this.deleteItem} editItem={this.editItem}/>
      </div>
    )

  }

}

export default ToDoContainer;
