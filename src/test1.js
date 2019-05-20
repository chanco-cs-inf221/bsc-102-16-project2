import React from "react"
import ReactDOM from "react-dom"
function MyInfo (){
    return(
        <div> <h1> Noel Noelz</h1> <p> I'm the world's finest programmer! </p>
        <ol> <li> London </li>
             <li> Palm island </li>
             <li> Manhattan island </li> 
         </ol>       
    </div>)
}
ReactDOM.render(<MyInfo/>, document.getElementIdBy("root"))