import { useNavigate } from "react-router-dom"
const LogIn = () => {
    let userName = "yourName"
    let password = ""
    let nav = useNavigate()
    const submitLogIn = () => {
       if (userName.split('').some(i => i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) || userName.length <= 2)
           return

        nav('/homePage/'+userName)
    }
    return <>
        <p><label>name</label><input type="text" onChange={(e) => { userName = e.target.value }}></input></p>
        <p><label>password</label><input type="password" onChange={(e) => { userName = e.target.value }}></input></p>
        <input type="submit" onClick={submitLogIn}></input>
    </>
}
export default LogIn