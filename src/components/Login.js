import { useState } from "react"
import axios from "axios";
import { jwtToken } from "./Signals/TokenSignal";


export default function Login(){

    const [username, setUsername ] = useState('');
    const [pw, setPw ] = useState('');

    function login(e) {
      e.preventDefault();
      axios.post('http://localhost:3001/login', {username, pw})
            .then(resp => {
            jwtToken.value = resp.data.jwtToken;
            console.log(jwtToken.value);
    })
            .catch(error => console.log(error.message))
    }
    console.log(jwtToken.value);
    return(
        <div>
            {jwtToken.value.length !== 0 ? <h2>Logged in</h2> :
            <div>
                <h2>Login</h2>
                <input onChange={e => setUsername(e.target.value)}/><br/>
                <input type="password" onChange={e => setPw(e.target.value)}/><br/>
                <button type="submit" onClick={login}>Login</button>
            </div>
        }
        </div>
    )
}