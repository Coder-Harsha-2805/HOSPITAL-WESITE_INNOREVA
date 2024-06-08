import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
   const history = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const hardcodedEmail = "birla@birla.com";
   const hardcodedPassword = "123456";

   async function submit(e) {
      e.preventDefault();
      try {
         if (email === hardcodedEmail && password === hardcodedPassword) {
            setTimeout(() => {
               history("/home");
            }, 1000);
         } else {
            alert("Incorrect email or password.");
         }
      } catch (e) {
         console.log(e);
      }
   }

   return (
      <div className="card bg-dark text-white">
         <img className={`card-img ${styles.imageMain}`} src="../bgg.avif" alt="Card image" />
         <div className="card-img-overlay">
            <div className={styles.login}>
               <h1>Login</h1>
               <form action="POST">
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                  />
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                  />
                  <button type="submit" onClick={submit}>
                     Login
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Login;



