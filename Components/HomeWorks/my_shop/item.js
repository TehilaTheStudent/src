import React from "react";
import './itemStyle.css';
export default function Item(props){
const item=props.item;

return (
<div className={props.className}>
    <p>name: {item.nameItem}</p>
    <p>emoji: {item.emoji}</p>
    <p>price: {item.price}</p>
    {props.status=="inShop"&&<p>units in stock: {item.unitsInStock}</p>}{/*i can show <p> as a js! like in return */}
    <input className='button' type="button" onClick={()=>{props.func(item)}} defaultValue={props.funcName}/>
</div>
)
}