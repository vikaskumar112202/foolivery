import React ,{ useState}from "react";
import "./style.css"
import { Link } from "react-router-dom";
import { LockKeyhole, Mail, Phone, User } from "lucide-react";

const Signup = ()=>{
    const[fullName,setFullName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const handleSubmit =async(e) =>{
        e.preventDefault();

      
        
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({fullName, email, phone, password}),
              });
          
              const data = await response.json();
              console.log(data);

        setFullName("");
        setEmail("");
        setPhone("")
        setPassword("");
            };
            
         
    return(
        <>
        <main className="signup">
            <section className="signupContainer">
            <div className="signupHeader">
              <h1>Signup to foolivery</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="signupInput">
            <User />
             <input type="text" placeholder="enter your full name" 
             value={fullName}
             onChange={(e) =>setFullName(e.target.value)}
             />
            </div>
            <div className="signupInput">
            <Mail />
             <input type="email" placeholder="enter your email" 
                value={email}
                onChange={(e) =>setEmail(e.target.value)} 
                />
            </div>
            <div className="signupInput">
            <Phone />
            <input type="number" placeholder="enter your phone no."
               value={phone}
               onChange={(e) =>setPhone(e.target.value)} />
            </div>
            <div className="signupInput">
            <LockKeyhole />
             <input type="password" placeholder="enter your password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Signup</button>
            <p> Already have account? <Link to="/login">Login</Link></p>
        </form>
        </section>
        </main>
        </>
    )

}

export default Signup;