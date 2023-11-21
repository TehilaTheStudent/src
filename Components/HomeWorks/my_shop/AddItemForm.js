import React, { useState } from 'react'
import './shopStyle.css'

const AddForm = (props) => {//get the adding function
    const [newItem, setNewItem] = useState(

        { nameItem: "my new item", price: "30", unitsInStock: 9,emoji:"💎" }//no id yet
    )
    const updateNewItem = (ev) => {//fiil details as inputs change
        let copyItem = { ...newItem }
        
        copyItem[ev.target.name] = ev.target.value
       
        setNewItem(copyItem)
    }
    const item_addNewItemToShop = ev => {
        ev.preventDefault();
        props.shop_addNewItemToShop(newItem)
       ev.target.querySelector("[name=nameItem]").value="my new item"
       ev.target.querySelector("[name=price]").value=30
       ev.target.querySelector("[name=unitsInStock]").value=9
       ev.target.querySelector("[name=emoji]").value="💎"
       setNewItem( { nameItem: "my new item", price: "30", unitsInStock: 9,emoji:"💎" })

    }
    return(
    <form onSubmit={item_addNewItemToShop} className='sideDiv'>

        <p><label>name:</label><input type="text" defaultValue={"my new item"} name="nameItem" onChange={updateNewItem} /></p>
        <p><label>price:(only even numbers!)</label><input defaultValue={30} name="price" type="number" onChange={updateNewItem} /></p>
        {newItem.price%2!=0&&<p className='errorMessage'>the price must be an even number</p>}
        <p><label>units in stock:(only odd numbers!)</label><input name="unitsInStock" defaultValue={9} type="number" onChange={updateNewItem} /></p>
        {newItem.unitsInStock%2==0&&<p className='errorMessage'>the units in stock must be an odd number</p>}
        <p><label>emoji:</label><input name="emoji" defaultValue={"💎"}  type="text" style={{fontFamily:"Segoe UI Emoji"}} onChange={updateNewItem} /><label>press windows+. to choose an emoji</label></p>
        <p><input type="submit" className='button' value={"add new item"} ></input></p>

    </form>)//must have () in function return!
}
export default AddForm;