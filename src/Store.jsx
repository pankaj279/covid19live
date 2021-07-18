import React from 'react';
import './index.css';

const Store=(props)=>{

  const mystyle={
    backgroundColor: "#e41632",
    textAlign:"center",
    padding:"10px",
    marginBottom:"50px",
    color:"white",
    borderRadius:"10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    margin:"20px",
    lineHeight:"10vh",
    
  
  }

return(
    <>

    
<div class="column">

    <div style={mystyle}>
     
      <h2 style={{color:"black"}}>{props.title}</h2>
        <h3><b>{props.data}</b></h3>
    </div>
  </div>
    

  

    </>
)


}
export default Store;