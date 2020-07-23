import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="Cart-block">
                    <div style={styles.image} className="left-block">
                    <img/>
                    </div>
                    <div style={{fontSize:22}} className="right-block">
                      <div>Phone</div>
                      <div style={{color:'#777'}} >Rs 990</div>
                      <div style={{color:'#777'}} >1</div>
                    </div>
            </div>
        );
    }
}
const styles={
   image:{
       width:110,
       height:110,
       borderRadius:25,
       background:'#ccc',
       
   }
}

export default CartItem;