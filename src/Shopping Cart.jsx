import React, { Component } from "react";

export default class ShoppingCart extends Component {
  state = {
    itemsData: [
      { id: 1, itemName: "item1", itemCount: 0 },
      { id: 2, itemName: "item2", itemCount: 0 },
      { id: 3, itemName: "item3", itemCount: 0 },
      { id: 4, itemName: "item4", itemCount: 0 },
      { id: 5, itemName: "item5", itemCount: 0 },
      { id: 6, itemName: "item6", itemCount: 0 },
      { id: 7, itemName: "item7", itemCount: 0 },
    ],
  };

  navBarCounter(){
    return this.state.itemsData.filter(element=>element.itemCount>0).length
  }

  handlingReset(){
    let updated = this.state.itemsData.map(element=>{
      element.itemCount = 0
      return element
    })
    this.setState({itemsData:updated})
  }
  
  handlingCount(currentElement){
    return (currentElement.itemCount === 0 )?'Zero': currentElement.itemCount
  }

  handlingIncrement(currentElement){
    let updated = this.state.itemsData.map((element,i)=>{
      if (element === currentElement) {
        element.itemCount++;
        return element
      }
      return element
    })
    this.setState({itemCount:updated})
  }

  handlingDecrement(currentElement){
    let updated = this.state.itemsData.map((e,i)=>{
      if (e === currentElement) {
        e.itemCount--;
        if (e.itemCount<=0) {
          return e.itemCount = 0
        }
        return e
      }
      return e
    })
    this.setState({itemCount:updated})
  }

  handlingDelete(currentElement){
    let updated = this.state.itemsData.filter(e=>e !== currentElement)
    this.setState({itemsData:updated})
  }

  totalCount(){
    return this.state.itemsData.reduce((add,element)=>{
     return add+element.itemCount
    },0)
  }

  render() {
    return (
      <React.Fragment>
        <div className="navBarContainer">
          <span className="navBar">Navbar</span>
            <span style={{backgroundColor:(this.navBarCounter()===0)?'rgb(189, 22, 39)':'rgb(33, 155, 6)'}} className="navBarCounter">{this.navBarCounter()}</span>
        </div>

        <div className="shoppingCartContainer">
          <button className="reset" style={{backgroundColor:(this.navBarCounter()===0)?'rgb(236, 119, 131)':'rgb(189, 22, 39)',boxShadow:(this.navBarCounter()===0)&&'none'}} onClick={()=>this.handlingReset()}>Reset</button>
          
            {this.state.itemsData.map((element, index) => {
              return (
              <div className="itemsContainer" key={index}>
                <span className="item">{element.itemName}</span>
                <span style={{backgroundColor:(element.itemCount===0)?'rgb(189, 22, 39)':'rgb(33, 155, 6)'}} className="count">{this.handlingCount(element)}</span>
                <button className="increment" onClick={()=>this.handlingIncrement(element)}>+</button>
                <button style={{backgroundColor:(element.itemCount===0)?'rgb(236, 119, 131)':'rgb(189, 22, 39)',boxShadow:(element.itemCount===0)&&'none'}} className="decrement" onClick={()=>this.handlingDecrement(element)}>-</button>
                <button className="delete" onClick={()=>this.handlingDelete(element)}>Delete</button>
              </div>
            )})}

          <div className="totalContainer">
            <span className="total">Total</span>
            <span style={{backgroundColor:(this.navBarCounter()===0)?'rgb(189, 22, 39)':'rgb(33, 155, 6)'}} className="totalCount">{this.totalCount()}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}