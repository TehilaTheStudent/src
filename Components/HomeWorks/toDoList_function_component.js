import React, { useState } from 'react'
function List() {
    const [list, setList] = useState(["Thila", "Avigail", "Uriel"])
    const addItem = (e) => {
        setList([...list,e.target.parentNode.childNodes[0].value]);
        e.target.parentNode.childNodes[0].value="";
    }
    const deleteItem = (index) => {
        console.log("delete");
       
        list.splice(index, 1);
        let newList=[...list]
   
        setList(newList);
    }
    return <>
    {console.log("return from function")}
        <h2>see the list as function component</h2>
        <p>you have {list.length} items on the list</p>
        <p><input></input><button onClick={(e) => { addItem(e) }}>add new item</button></p>
        <ul>
            {list.map((item, index)=>{return <li key={index} onClick={()=>{alert("you chose: "+item);}}>
{item}
<button onClick={(e)=>{deleteItem(index);e.stopPropagation();}}>erase</button>
            </li>})}
        </ul>
    </>
}
export default List;