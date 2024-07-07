import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {

 constructor(props){
  super(props)
  this.state ={
    orders: [],
    currentItems: [],
    error: null,
    isLoaded: false,
    items: [],
  };
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  }
  componentDidMount(){
    fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(
      (result) =>{
        this.setState({
          isLoaded: true,
          items: result,
          currentItems: result,
        }
        );
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }
  render(){
    const {error, isLoaded} = this.state;
    return(
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/> 
        <Categories  chooseCategory={this.chooseCategory}/> 
        <Items error={error} isLoaded={isLoaded} items={this.state.currentItems} onAdd={this.addToOrder}/>
        <Footer />
      </div>
      
    )
    
 } 
 chooseCategory(category){
  
  if( category === "all" ){
    this.setState({currentItems: this.state.items})
    return
  }else{
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
    return
  } 
  
 }

 deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el=>el.id !==id)})
 }
 addToOrder(item){
  let isIn = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isIn = true;
  })
  if (!isIn)
  this.setState({orders: [...this.state.orders, item]})
 }
}
export default App;
