import Login from './Login';
import PersonalData from './PersonalData';
import { jwtToken } from './Signals/TokenSignal';

export default function AuthorizationExample() {
  return (
    <div>
      {jwtToken.value === '' ?
        <Login/> :
        <PersonalData/>       
      }
    </div>
  );
}