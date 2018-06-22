import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PDF from 'jspdf';

export default class BillDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            billdetails:null
        }
    }

    componentDidMount = () => {
        const billId = parseInt(this.props.match.params.id,10); //this is going to match 
        axios.get('http://localhost:3000/api/bills/'+billId) // this is url parameter
        .then((res) =>{
          this.setState({
            billdetails:res.data
          })
        })
        .catch((err)=>{
          console.log(err);
        });
      }
      
      handlePdf = () => {
        const user_name= this.state.billdetails.customer_name;
        const mobile_number= this.state.billdetails.mobile_number;
        const status= this.state.billdetails.status;
        const dueDate= this.state.billdetails.due_bill_date;
        const total_amount= this.state.billdetails.total_amount;
        // console.log("value",test);
        const doc1 = new PDF('p','pt','c6');
        doc1.text(20,80,'Customer Name: '+user_name+'\nMobile Number: '+mobile_number+'\nStatus: '+status+'\nDue date: '+dueDate+'\nTotal Amount: '+ total_amount);
       
        doc1.save("finalBill.pdf");
    }
      
  render() {
    const styles = {
        cardrPimary: {
            backgroundColor: '#0275d8',
            borderColor: '#0275d8'
        },
        btncolor:{
            color:'#fff'
        }
        
    }
    return(
       

        this.state.billdetails ? 
   
            <div className="card ">
                <h3 className="card-header text-white" style={styles.cardrPimary}>Produt Deatil: <span className="fa fa-phone pull-right">
                </span> {this.state.billdetails.product_name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><label>  Customer Name:</label>  {this.state.billdetails.customer_name}</li>
                    <li className="list-group-item"><label> Customer Mobile Number :</label>  {this.state.billdetails.mobile_number}</li>
                    <li className="list-group-item"> <label>  Status:</label>  {this.state.billdetails.status}</li>
                    <li className="list-group-item"> <label> Due Date :</label>  {this.state.billdetails.due_bill_date}</li>
                    <li className="list-group-item"> <label> Total Amount :</label>  {this.state.billdetails.total_amount}</li>
                </ul>
                <div>
                    <button className="btn btn-primary "> <Link  to={`/`} style={styles.btncolor} > Back To Product </Link>  </button>
                    <button className="btn btn-primary ml-2">  <Link  to={`/previous_bill/${this.state.billdetails.id}`} style={styles.btncolor}> Bill History</Link>  </button>
                    <button className="btn btn-primary ml-2" onClick={this.handlePdf}>Download PDF</button>
                </div>       

                <div className="card-footer">
                    <small className="text-muted" >Last updated 3 mins ago</small>
                </div>
            </div>
      : null
      )
  }
}
