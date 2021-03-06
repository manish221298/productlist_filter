import React from 'react'
import {BrowserRouter,Link,Route,} from 'react-router-dom'
import Productform from "./Productform"
import Productlist from "./Productlist"
import './App.css'

function App() {
  return (
    <div className="App">
          <h1 className="heading">Welcome to E-Commerce Store</h1>
        <BrowserRouter>
            <div>
              {    
                <ul>
                    <div style={{width: "100%"}}>
                        <div style={{width: "40%", float: "left"}}>
                            <button><Link className="link1"  to="/productform" >ADD PRODUCT </Link></button>
                        </div>
                        <div style={{width: "40%", float: "right"}}>
                              {/* <Link style={{float: "right", marginRight: "440px"}} to="/bloglist" ><button>Published</button></Link> */}
                              <button><Link  className="link2"  to="/productlist" >PRODUCT LIST</Link></button>
                        </div>
                    </div>
                </ul>
              }

                <Route path="/productform"  component={Productform} exact={true}/>
                <Route path="/productlist" component={Productlist} exact={true} />
            </div>
             
        </BrowserRouter>
    </div>
  );
}

export default App;