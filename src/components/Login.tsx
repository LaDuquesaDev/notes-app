import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, AuthError } from "firebase/auth";
import { auth } from "../api/firebaseConfig";
import "../styles/login.css";

export const Login = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      navigate("/Notes");
    } catch (error) {
      const authError = error as AuthError;
      console.error({
        errorCode: authError.code,
        errorMessage: authError.message,
      });
    }
  };

  return (
    <div className="login-container">
      <section className="title">
        <h1>Notes-app</h1>
      </section>
      <section className="text">
        <p>The perfect App to write down what you want</p>
      </section>
      <button className="login-btn login-google" onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};
