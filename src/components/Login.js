import { useState } from "react"
import axios from "axios";
import { jwtToken } from "./Signals/TokenSignal";


export default function Login(){

    const [username, setUsername ] = useState('');
    const [pw, setPw ] = useState('');

    function login(){
        axios.postForm('/login', {username, pw})
            .then(resp => jwtToken.value = resp.data.jwtToken)
            .catch(error => console.log(error.message))
    }

    return(
        <div>
            {jwtToken.value.length !== 0 ? <h2>Logged in</h2> :
            <div>
                <h2>Login</h2>
                <input onChange={e => setUsername(e.target.value)}/><br/>
                <input onChange={e => setPw(e.target.value)}/><br/>
                <button onClick={login}>Login</button>
            </div>
        }
        </div>
    )
}