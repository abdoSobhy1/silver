import { signInWithGoogle } from "../../Firebase";
const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Login;
