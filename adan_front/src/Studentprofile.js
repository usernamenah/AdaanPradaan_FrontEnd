import React from 'react';
import "./studentprofile.css"

export default function Studentprofile() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
                <img className="img-usn" src="imagesre\user phtoo.jpg" alt="user photo" width="100" height="100" ></img>
            </div> 
            <div className="col-8">
                <br/><br/><br/>
                <h1 style={{color: "#8F6600FF"}}> S T U D E N T  &nbsp;&nbsp;  N A M E </h1>
            </div>

        </div>

    </div>
    <br/><br/><br/><br/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
                <h1 style={{color:"#8F6600FF"}}>
                    S T U D E N T    &nbsp;&nbsp; I N F O
                </h1>
            </div>

        </div>
         
    </div>
    
    
    
    
    </>
  )
}
