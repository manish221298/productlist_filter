import React from "react"
import {connect} from "react-redux"
import {Form} from "react-bootstrap"

class Productlist extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            select: ["Select", "Category", "Product", "Range", "Color"],
            option: ""
        }
    }

    filter = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleChange = (e) => {
        this.setState({
            option: e.target.value
        })
    }
    
    render(){
        //console.log("props", this.props)

        let select = this.state.select
        let selectList = select.map((ele, i) => {
            return (
                <option key={i}>{ele}</option>
            )
        })

        return(
            <div className="list">
                    <h1>Product List</h1>
                <form>
                <Form.Control style={{fontSize: "20px", height: "40px"}} as="select" onChange={this.handleChange} name="option">
                    {selectList}
                </Form.Control>
                    <input style={{width: "67%", height: "40px"}} type="search" name="title" value={this.state.title} placeholder="Search Product" onChange={this.filter} />
                </form>
                
                <div className="scrolling">
                    {/* {DropDown for Products} */}
                    {this.state.option === "Product" &&
                        this.props.products.filter(ele => ele.product.toLowerCase().includes(this.state.title) ||
                                                       ele.pdtRange.toLowerCase().includes(this.state.title) ||
                                                       ele.pdtColor.toLowerCase().includes(this.state.title)).map((ele, i) => {
                                return(
                                    <div className="card">
                                            <h3>{ele.product}</h3>
                                        <p>Rs. {ele.pdtRange}</p>
                                        <p>{ele.pdtColor}</p>
                                </div>
                                )
                        })
                        
                    }

                    {/* DropDown for Range */}
                    {this.state.option === "Range" &&
                        this.props.products.filter(ele => ele.product.toLowerCase().includes(this.state.title) ||
                                                       ele.pdtRange.toLowerCase().includes(this.state.title) ||
                                                       ele.pdtColor.toLowerCase().includes(this.state.title)).map((ele, i) => {
                                return(
                                    <div className="card">
                                            <h3>{ele.product}</h3>
                                        <p>Rs. {ele.pdtRange}</p>
                                        <p>{ele.pdtColor}</p>
                                </div>
                                )
                        })
                        
                    }

                    {/* DropDown for Color */}
                    {this.state.option === "Color" &&
                        this.props.products.filter(ele => ele.product.toLowerCase().includes(this.state.title) ||
                                                       ele.pdtRange.toLowerCase().includes(this.state.title) ||
                                                       ele.pdtColor.toLowerCase().includes(this.state.title)).map((ele, i) => {
                                return(
                                    <div className="card">
                                            <h3>{ele.product}</h3>
                                        <p>Rs. {ele.pdtRange}</p>
                                        <p>{ele.pdtColor}</p>
                                </div>
                                )
                        })
                        
                    }
                    {
                        this.state.option === "Category" && 
                        this.props.products.filter(ele => ele.category.toLowerCase().includes(this.state.title)).map((ele, i) => {
                                return(
                                    <div className="card">
                                            <h3>{ele.category}</h3>
                                    </div>
                                )
                        })

                    }
                    
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Productlist)