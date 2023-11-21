import {useNavigate} from 'react-router-dom'

const Login = () => {


let nav = useNavigate()//פונקציה שמחזירה פונקציה

let user={

    name:"",
    password:""
}

const cheackIsValid=()=>{

if(user.name!="Ruth")
return;
if(user.password.length<5)
return;
// הפונקציה תשרשר למעלה את המילה ליסט ואז הראוט-יעבוד בהתאמה ויציג את קומפוננטת ליסט
// כאשר  נכתוב ליסט ללא סלש- ישתרשר לניתוב הקיים כבר המילה ליסט 
// nav('list')
// כאשר נוסיף סלש קודם -ידרס הניתוב הקיים וישתרשר למעלה ליסט בלבד
nav('/list')


}
//  let x= cheackIsValid()

    return ( 
        <div>
            שם
        <input type="text" onChange={(e)=>user.name=e.target.value}></input>
        סיסמא
        <input type="password" onChange={(e)=>user.password=e.target.value}></input>

        <input type="submit" onClick={cheackIsValid}></input>
        </div>
     );
}
 
export default Login;