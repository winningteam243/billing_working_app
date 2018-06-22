import React from 'react';
import PhoneDeatails from './phone-data'


import UserService from '../../shared/services/user-service';



class ProductPannel extends React.Component {
  constructor (){
    super()
    this.state = {
      products:[]
    }
    this.userService = new UserService()
  }
  // On load Product should get load with data
  componentDidMount =()=>{
    this.userService.getUser()
    .then((product) => {
        this.setState({
          products: product

        })
        // console.log("Produt Deatails",this.state.products)
    })
    .catch((err)=>{
      console.log("Error:",err)
     
    })
  }




  render() {
  
const produtData =  this.state.products.map(produt => <PhoneDeatails key={produt.id} prodata={produt} /> )

    return (
       <div>
         
            {this.state.products ? produtData : null}    
       
      </div>
    );
  }
}


export default ProductPannel
