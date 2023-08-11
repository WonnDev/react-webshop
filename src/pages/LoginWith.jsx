import { useEffect, useState } from 'react';
import { signInWithGoogle, auth , signOutWithGoogle } from '../firebase/firebase';


const LoginWithGoogle = () => <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i> Login with Google</button>
 
const HadLogWithGoogle = ({user}) => <button className="button" onClick={signOutWithGoogle}><i className="fab fa-google"></i> Hi {user.displayName}, Logout</button>

const LoginWith = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {user ? <HadLogWithGoogle user={user} /> : <LoginWithGoogle /> }
    </div>
  )
}

export default LoginWith;