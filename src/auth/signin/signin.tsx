import React, { useState } from "react";
import "./signin.css";
import firebase from "../../firebase";
import { useNavigate, useNavigation } from "react-router-dom";
import googleImg from "../../assert/VHSZf.png";
export default function Singin() {
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://localhost:3000",
    // This must be true.
    handleCodeInApp: true,

    dynamicLinkDomain: "https://localhost:3000/summer-sale",
  };
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const [sinintogl, setsinintogl] = useState(true);

  const navigate = useNavigate();
  function login() {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
           firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {

      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
        localStorage.setItem("user", JSON.stringify(userCredential));
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    //   firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    // .then(() => {

    //   window.localStorage.setItem('emailForSignIn', email);
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });
  }
  function sinup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            user
              .updateProfile({
                displayName: username,
              })
              .then(
                function () {
                  localStorage.setItem("user", JSON.stringify(user));
                  console.log(user);
                  navigate("/home");
                },
                function (error) {
                  // An error happened.
                }
              );
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  function singintoggle() {
    setsinintogl(sinintogl ? false : true);
  }
  function singupgogluth() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential: any = result.credential;
        localStorage.setItem("user", JSON.stringify(credential));
        var token = credential.accessToken;
        var user = result.user;
        navigate("/home");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  function forgotepass() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
  return (
    <div
      style={{ width: "25rem", marginTop: "7rem" }}
      className="redius rediuss ml-auto mr-auto "
    >
      <div className="card text-center redius" style={{ height: "36rem" }}>
        <div className="card-body redius">
          <h2 className="card-title mt-3 mb-3" style={{ color: "#04AA6D" }}>
            {sinintogl ? "Singin" : "Singup"}
          </h2>
          <div className="mt-5">
            {sinintogl ? (
              ""
            ) : (
              <div className=" mt-5">
                <input
                  type="text"
                  className="form-control"
                  id="UserName"
                  aria-describedby="UserName"
                  placeholder="UserName"
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
            )}
            <div className="mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="mb-5 mt-2">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="btn mt-3 btn-primary"
              style={{ backgroundColor: "#04AA6D", width: "100%" }}
              onClick={sinintogl ? login : sinup}
            >
              Submit
            </button>{ sinintogl ?
            <button className="btn btn-link" onClick={forgotepass} > forgot password</button> : ""}
          </div>

          <div className="mt-5">
            {sinintogl ? (
              <p>
                don't have Account:
                <button className="btn btn-link" onClick={singintoggle}>
                  
                  SignUp
                </button>
              </p>
            ) : (
              <p>
                Do you have Account:
                <button className="btn btn-link" onClick={singintoggle}>
                  
                  SignIn
                </button>
              </p>
            )}
            <button
              className="btn btn-sm btn-light mt-3  "
              onClick={singupgogluth}
            >
              <img src={googleImg} width={200} height={50} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
