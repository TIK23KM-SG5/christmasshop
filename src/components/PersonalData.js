import { customerData } from "./Signals/CustomerSignal";
import { jwtToken } from "./Signals/TokenSignal";

/**
 * This example components retrieves the user data from the server if the user is logged in
 * Bearer token is set in axios defaults in AuthorizationExample.js
 */
export default function PersonalData(){

    return (    
        <div>
            {customerData.value === null ? <h2>No authorized personal data</h2>:
                <div>
                    <h2>Welcome {customerData.value.fname + " " +  customerData.value.lname}</h2>
                    <button onClick={()=> jwtToken.value = ''}>Logout</button>
                </div> 
            }
        </div>
    )
}