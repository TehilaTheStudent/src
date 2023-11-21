import React,{ useState} from 'react'

function FunctionComp(){
    let [num,setNum]=useState(9);
const [arr,setArr]=useState([]);
    const changeNum=()=>{
        // num++;
        setNum(num+1);
        arr.push(1);
setArr(arr);
    }


return <>
<button onClick={changeNum}>
{num}
{arr.toString()}
{console.log(num)}

</button>
</>
}
export default FunctionComp;