// import "./App.css";
import "./styles/GoogleLogin.scss"
import { signInWithGoogle } from "./firebase-config.js";

function GoogleLogin() {
  return (
    <div className="App">
      {" "}
      {/* <button onClick={signInWithGoogle}> Sign In With Google</button> */}
      <button onClick={signInWithGoogle} type="button" class="login-with-google-btn">
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  );
}

export default GoogleLogin;
