import React, {useState} from "react";
export const Register=(props)=>{
    const[email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const[name,setName]=useState('')
     
    const handleSubmit=(e)=>{
     e.preventDefault();
     
    }
    return(
    <div className='auth-form-container'>
   <form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Fullname</label>
    <input value={name} onChange={e=>setName(e.target.value)} name="name" id="name" placeholder="full name"></input>
    <label htmlFor="email">Email</label>
    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
     <label htmlFor="password">Password</label>
     <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
      <button type="submit">Submit</button>
     </form>
     <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Don't have an account ? Register here</button>
   </div>
    )
}