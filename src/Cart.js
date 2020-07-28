import React from 'react';
import Cartitem from './Cartitem';


class Cart extends React.Component{

    constructor(){
        super();
        this.state={
            products:[
                        {
                            price:25000,
                            qty:4,
                            title:'PS4',
                            key:1
                        },

                    {
                        price:55000,
                        qty:1,
                        title:'AC',
                        key:2
                    },

                        {
                            price:60000,
                            qty:1,
                            title:'Snooker table',
                            key:3
                        }
            ]
        }
    }
     
    increaseq=(product)=>{
     const {products}=this.state;
     const index=products.indexOf(product);
     
     products[index].qty+=1;
     this.setState({
         products:products         // the right product is the product which we have taken above by destructuring..we are updating it
     });

    } 
    decreaseq=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if( products[index].qty>1){
        products[index].qty-=1;
        }
        this.setState({
            products:products         // the right product is the product which we have taken above by destructuring..we are updating it
        });
   
       }


       deleteq=(id)=>{
      const {products}=this.state;
      const idremovedarray= products.filter((item)=>{return (item.key!==id)});
      console.log(id);
     
      console.log(idremovedarray);
      this.setState({
          products:idremovedarray
      })
     
       }



  render(){

    return (

        <div className="Cart"> 
        
         {
          this.state.products.map( (product) =>{
        
            return <Cartitem 
            product={product} 
            increasequantity={this.increaseq}
            decreasequantity={this.decreaseq}
            deleteitem={this.deleteq}
            key={this.key}
            /> 
           } )
        }  
        
        </div>
    );

  }



}
export default Cart;