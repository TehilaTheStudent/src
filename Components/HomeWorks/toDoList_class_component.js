import React from 'react'

export default class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ["home work in react", "say Tehilim for the war", "prepare for Semoinar", "install the program"]
        }
      
    }
    deleteItem = (index) => {
        this.state.list.splice(index, 1);
        const newList = [...this.state.list];
        this.setState({ list: newList })
    }
    addItem=(e)=>{
  
    this.state.list.push(e.target.parentNode.childNodes[0].value);
    const newList=[...this.state.list];
    this.setState({list:newList});
}
    render() {
        {console.log("i am rendering and returning")}
        return (

            <>
                <h2>see the list made as a class component</h2>
                <p>{this.state.list.length} tasks are left to do: </p>
                <p><input></input><button onClick={e=>{this.addItem(e);}}>add the tast to list!</button></p>
                <ul >
                    {this.state.list.map((item, index) => {
                        return <li key={index} onClick={()=>{alert("do the task\n" + item)}}>
                        {item}
                            <button onClick={(e) => { e.stopPropagation(); this.deleteItem(index) }}>done!</button>
                        </li>
                    })}
                </ul>

            </>
        )
    }

}
