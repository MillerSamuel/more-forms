import React,{useState} from "react";


const Form=()=>{

    let [fName,setFName]=useState("");
    let [lName,setLName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [confirm,setConfirm]=useState("");


    return(
        <>
        <form>
            <div className="m-2">
                <label htmlFor="fName">First Name:</label>
                <input onChange={(e)=>setFName(e.target.value)} type="text" name="fName" />
                {
                    fName.length<2&&fName.length>0? <p>First name must be atleast 2 characters long </p>:null
                }
            </div>
            <div className="m-2">
                <label htmlFor="lName">Last Name:</label>
                <input onChange={(e)=>setLName(e.target.value)} type="text" name="lName" />
                {
                    lName.length<2 && lName.length>0? <p>Last name must be atleast 2 characters long </p>:null
                }
            </div>
            <div className="m-2">
                <label htmlFor="email">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" name="eamil" />
                {
                    email.length<6 && email.length>0? <p>Email must be atleast 5 characters long </p>:null
                }
            </div>
            <div className="m-2">
                <label htmlFor="password">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" />
                {
                    password.length<8 && password.length>0? <p>Password must be atleast 8 characters long </p>:null
                }
            </div>
            <div className="m-2">
                <label htmlFor="confirm">Confirm Password:</label>
                <input onChange={(e)=>setConfirm(e.target.value)} type="password" name="confirm" />
                {
                    confirm!=password &&confirm.length>0? <p>Password does not match </p>:null
                }
            </div>
        </form>
        <hr />
        <p>First Name: {fName}</p>
        <p>Last Name: {lName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>
        </>
    )
    
}

export default Form;