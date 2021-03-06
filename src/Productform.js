import React from "react"
import {connect} from "react-redux"
import {addProduct} from './actions/productAction'
import Productlist from "./Productlist";

class Productform extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            category: "",
            product: "",
            pdtRange: "",
            pdtColor: "",
            productError: "",
            pdtRangeError: ""
        }
    }



    handleChange=(e)=>
    {
        this.setState({[e.target.name]: e.target.value})
        this.setState({productError: ""})
    }

    validation = () => {
        let productError = ""
        let pdtRangeError = ""
        if(!this.state.product){
            productError = "Title should be required"
        }

        if(!this.state.pdtRange){
            pdtRangeError = "Message should be required"
        }
        if(productError  || pdtRangeError){
            this.setState({productError, pdtRangeError});
            return false;
        }
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isData = this.validation();
        if(isData){
            const formData = {
                category: this.state.category,
                product: this.state.product,
                pdtRange: this.state.pdtRange,
                pdtColor: this.state.pdtColor
            }
            this.props.dispatch(addProduct(formData))
           
            this.setState({category: "",product: "", pdtRange: "", pdtColor: "", productError: "", pdtRangeError: ""})
        }

    }
    
    render(){
        return(
            <div>
                <div style={{width: "40%", float: "left"}}>
                    <div style={{marginLeft: "40px"}}>
                        <h1 style={{marginTop: "30px"}}>Product form</h1>
                        <form onSubmit={this.handleSubmit}>
                        <label>Category</label> <br/><br/>
                            <input style={{width: "100%", height: "30px"}} type="text" name="category" value={this.state.category}  onChange={this.handleChange}  /><br /><br />
                            <label>Product</label> <br/><br/>
                            <input style={{width: "100%", height: "30px"}} type="text" name="product" value={this.state.product}  onChange={this.handleChange}  />
                            <p style={{color: "red"}}>{this.state.productError}</p><br/>
                            <label>Product Range</label><br/><br/>
                            <input style={{width: "100%", height: "30px"}} type="text" name="pdtRange" value={this.state.pdtRange}  onChange={this.handleChange}  /><br />
                                    {this.state.pdtRangeError ? <p style={{color: "red"}}>{this.state.pdtRangeError}</p> : null}
                                    <br/>
                            <label>Product Color</label><br/><br/>
                            <input style={{width: "100%", height: "30px"}} type="text" name="pdtColor" value={this.state.pdtColor}  onChange={this.handleChange}  /><br />
                                    
                                    <br/>
                            <input type="submit" value="PUBLISH" />
                        </form>
                    </div>
                </div>
                <div style={{width: "50%", float: "right"}}>  
                 {/* ///className="scrolling"  */}
                    <Productlist />
                </div>
            </div>
        )
    }
}

export default connect()(Productform)