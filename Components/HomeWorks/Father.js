import React from 'react';

export default class FatherComp extends React.Component
{

    name="Naftali Aharonovich";
    sentence="I'm the father and my name is...";
    childArr=["Tehila","Daniel","Avigail"];



    render()
    {
  
      
        
        return(
         
         <>
        <div > 
           {this.sentence}{this.name} my children{ } are
            <ul>
              
                <li >{this.childArr[0]}</li>
                <li>{this.childArr[1]}</li>
                <li>{this.childArr[2]}</li>
                </ul>
        </div>
         </>
        )
    }
    
}