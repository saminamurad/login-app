import React, {useState} from "react";
export const Login=(props)=>{
    const[email,setEmail]=useState('')
    const [pass,setPass]=useState('')
     const [submitting, setSubmitting] = useState('');
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(email)
    // }
     const handleSubmit = e => {
    e.preventDefault();
    setSubmitting();

    
  }

    return(
    <div className='auth-form-container'>
   <form className="login-form"Submit={handleSubmit}>
    <label htmlFor="email">Email1</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
     <label htmlFor="password">Password</label>
     <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
      <button value={submitting} type="submit">Submit</button>
     </form>
     <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account ? Register here</button>
  </div>
    )
    }