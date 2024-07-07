import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: [],
        }
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(
      (result) =>{
        this.setState({
          categories: result
        }
        );
      
    })
    }  
  render() {
    const {categories} = this.state;
    return (
      <div className='categories'>
        <ul  onClick={()=>this.props.chooseCategory("all")}> all </ul> 
      {categories.map(el => (
        <ul key={el} onClick={()=> this.props.chooseCategory(el)}>{el}</ul>
    ))}</div>
    )
  }
}

export default Categories