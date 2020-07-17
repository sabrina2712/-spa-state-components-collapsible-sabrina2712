import React from "react"
import data from "./data.json"
import "./style.css"





class CollapsibleContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {data : data, isOpen: false, showMenu: null}

    }

    onClickHandler=(key)=>{
        let {showMenu} = this.state
        this.setState({
          
             showMenu: key
        })
    }


  render(){
  
    return( 
        <>
           
            <h1>Collapsible List</h1>
            <ul>
            {data.map((item, index) => (
            <div key={item.id}>
               <div key={item.id}>
                    <div className="list-items"  onClick ={()=>{
                        this.onClickHandler(item.id)
                    }}>

                    {item.question} <span span-item>+</span></div>
                    <div className="answer-item"  style={this.state.showMenu === item.id? {} :{ display: 'none' }}
                    
                    >{item.answer}</div>
                    
                </div>
               
            </div>
            ))}
        </ul>

                
        </>
    )
}
}




export default CollapsibleContent;


