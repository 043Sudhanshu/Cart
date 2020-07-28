import React from 'react';

class Cartitem extends React.Component{
   
    constructor(){
        super();
       this.state={
           price:900,
           qty:1,
           title:'Mobile phone'
       }  
    }
    increasequantity= () => {
     this.setState((prevstate)=>{
      return { qty:prevstate.qty+1}
     });  
    }
    decreasequantity= () =>{
        const {qty} =this.state;
        if(qty===0){
            return;
        }
        this.setState((prevstate)=>{
            return { qty:prevstate.qty - 1 }
        });
    }
   
    render(){
        const {price,title,qty} =this.state;      //object destructuring..directy use the property of this.state
        return(
            <div className="cart-item">
                <div  className="left-block">
                    <img style={styles.image} alt="" />
                </div>
                 <div className="right-block">
                      <div style={{fontSize:25}}>{title}</div>
                      <div style={{color:'#777'}} >Rs {price}</div>
                        <div style={{color:'#777'}} >{qty}</div>
                      <div className="cart-item-actions">
                                {/* Buttons -comment */}
                <img onClick={this.increasequantity} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                <img onClick={this.decreasequantity} alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                     </div>
                 </div>
            </div>
        );
    }
}
const styles={
   image:{
       width:140,
       height:140,
       borderRadius:25,
       background:'#ccc',
       
   }
}

export default Cartitem;