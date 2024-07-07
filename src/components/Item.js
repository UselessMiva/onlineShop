import React, { Component } from 'react'

export class Item extends Component { 
  render() {
    return (
        <div className='item'>
          <img src={this.props.item.image}></img>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
          <b>{this.props.item.price}$</b>
          <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>
        </div>
    )
  }
}

export default Item