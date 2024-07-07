

import React, { Component } from 'react'
import Item from './Item'
export class Items extends Component {
  render() {
  if (this.props.error){
      return <main>Error {this.props.error.message}</main>
    }
   else if (!this.props.isLoaded){
    return  <main>Loading...</main>
   } else  {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
            
        ))}
      </main>
    )
  }
}
}

export default Items
