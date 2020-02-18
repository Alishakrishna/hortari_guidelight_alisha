import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import productTile from './components/productTile';
const productsArray=[
   {
    "id":1,
    "title":"Oneplus 7",
    "price":"Rs 35000",
   },
   {
    "id":2,
    "title":"Redmi Pro",
    "price":"Rs 40000",
   },
   {
    "id":3,
    "title":"MI A3",
    "price":"Rs 45000",
   }
]
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstState: 'hello world',
            cartCount: 0,
            products :[]
            
            
          
        }
    }
        


    componentDidMount(){
        this.loadproducts()
    }
    componentDidUpdate(PrevProps,preState){
      if(this.state.cartCount>=10)
      alert('10/more items added')
    }
    
    addCount(){
      const newCount=this.state.cartCount+1;
      this.setState({
        cartCount: newCount
        
      })
      
    }
    loadproducts() {
      this.setState({
        products: productsArray
      })
    }

 render() {
      const productsList = this.state.products.map((product) => {
        return productTile(this.addCount.bind(this),product)
      })
      console.log(productsList)
      return(
   
        <div className="container">
          <nav className="navbar navbar-light" style={{"backgroundColor": "green"}}>
    
    <img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>
    {this.state.firstState}
    
    
    <p align="right">
    <button type="button" className="btn btn-warning">Cart{this.state.cartCount}</button>
    </p>
    </nav>
            <div className="row">
               {productsList}
               </div>
                
            <p align="right">
              <button type="button" className="btn btn-primary btn-lg" onClick={() =>{
                                      alert('ARe u sure')
                                    }

                                    }>Checkout</button></p>
    
    </div>
    
    
    
      );

}




}







export default App;


