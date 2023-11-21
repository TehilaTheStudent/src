import React from 'react';
import './HoursColors.css';
export default class BackgroundClass extends React.Component
{
    constructor(){
        super();
       
    }
    time=new Date();
    classTime='';
    hours=this.time.getHours();
    changeClassHour=()=>{
        if(this.hours>=8&&this.hours<=13)
        return 'morning';
    else if(this.hours>=13&&this.hours<=24)
    return 'noon'

else
return 'night';
    }
    render()
    {

        return (
        <>
        <div className={this.changeClassHour()}>
            the date is &nbsp;{this.time.toLocaleDateString()}
<br></br>
the hour is &nbsp;
{this.time.getHours()}&nbsp;
so its className {this.changeClassHour()}
        </div>
        </>);
    }
}