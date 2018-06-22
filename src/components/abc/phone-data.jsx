import React, { Component } from 'react'
import { Panel } from 'primereact/components/panel/Panel';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



class PhoneDeatails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewBill: [],
            modalIsOpen: false,
            historyData:[]
        }
        this.handleCheck = this.handleCheck.bind(this);
       
        this.previousData = this.previousData.bind(this);
    }

    handleCheck = (data) => {
         console.log("data on view click", this.state.viewBill)
        this.setState({
            viewBill: data,
        })
    }

    //codefor previous data
    previousData =(previousdata) => {
     this.setState({
        historyData:previousdata.history,
        modalIsOpen: true
     })
     console.log('previousdata', previousdata);
     
    }
    
  

    render() {
        const styles = {
            btn1: {
                marginLeft: '10px'
            },
            panelhederBackground:{
                backgroundColor: '#0275d8'
            }
        }

        const prvd = this.state.historyData.map(prvData => {
            return(
                <table className="table table-bordered">
                    <tr key={prvData.month}>
                        <td>{prvData.month}</td>
                        <td>{prvData.amount}</td>
                        <td>{prvData.due_date}</td>
                        
                    </tr>
                </table>
               
                  
          
        ) })
        
        return (
            <div>

                <div className="content-section implementation">
                
                    {/* Code to add panel dynamically  */}
                    <Panel header={this.props.prodata.product_name} toggleable={true} >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                    <label>Custome Name: </label> {this.props.prodata.customer_name}
                                    <br />

                                </div>
                                <div className="col-md-6">
                                    <label>Status: </label> {this.props.prodata.status}<br />
                                    <label>Bill Date: </label> {this.props.prodata.generate_bill_date}

                                </div>
                                <div>

                                </div>

                            </div>
                            <div className="row">
                                {/* <button type="button" style={styles.btn1} className="btn btn-primary" 
                                onClick={() => this.handleCheck(this.props.prodata)}> View Bill</button> */}

                                <Link className="ui basic blue button" to={`/billdetails/${this.props.prodata.id}`}>View bill</Link>
                                <button type="button" style={styles.btn1} className="btn btn-primary"> View Plan</button>
                                <button type="button" style={styles.btn1} className="btn btn-primary"> Support</button>
                            </div>
                        </div>

                    </Panel>

                </div>
            </div>
        )
    }
}
export default PhoneDeatails;