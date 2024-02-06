//Libraries
import React, { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";


//images
import googleLogo from '../assets1/img/logo-Google.png';
import appleLogo from '../assets1/img/icon-Apple.png';
import facebookLogo from '../assets1/img/icon-Facebook.png';

//style
import './css/CustomerLogin.css';

//Components 
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";


const CustomerLogin = () => {
  const navigate = useNavigate();

  const onLogin = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };


  return (
    <>
    <Navbar />
      <div className="container-fluid">

        <div className="row">
          
          <div className="col-lg-6 d-flex d-none d-lg-block left-side"> </div>

          <div className="col d-flex flex-column  vh-100 vh-100-mobile justify-content-center">
            <div className="card form-container shadow p-3 mb-5 bg-white rounded">

              <h3 className="text-center">Vous avez déjà utilisez <span style={{ color: "pink" }}>Shiny</span>?</h3>
              <br />
              <form action="">

                {/* Email input  */}
                <div className="email">
                  <fieldset className="p-2">Email *</fieldset>
                  <div className="d-flex ">
                    <input
                      type="text"
                      className="form-control mr-3 "
                      placeholder="Entrez votre email.."
                    />
                  </div>
                </div>

                <br />

                {/* Password input  */}
                <div className="password">
                  <fieldset className="p-2">Mot de passe *</fieldset>
                  <div className="d-flex ">
                    <input
                      type="password"
                      className="form-control mr-3 "
                      placeholder="Entrez votre email.."
                    />
                  </div>
                  <span className="text-secondary p-2">Mot de passe oublié</span>
                </div>

                { /* Button Envoyer*/}
                <div className="row p-4">
                  <div className="col-lg-12 text-center">
                    <button className="btn1 submit">S’enregistrer</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <hr className="separator-line" />
                  </div>
                  <div className="col-auto separator-text">Ou</div>
                  <div className="col">
                    <hr className="separator-line" />
                  </div>
                </div>

                <div className='text-center'>
                  <span className="registration-btn p-2">
                    <Link to="/customer-registration" className=" text-center link-register">
                      Créer un compte
                    </Link>
                  </span>
                </div>

                {/* <div className="container mt-3 d-flex flex-column align-items-center others"> */}
                <div className="container mt-3 d-flex align-items-center others">
                  <div className="row mb-3">
                    <div className="col">
                      <button className="btn btn-custom btn-equal-size">
                        <img src={googleLogo} alt="Google Logo" className="logo" />
                        <span className="button-text">Se connecter avec Google</span>
                      </button>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <button className="btn btn-custom btn-equal-size">
                        <img src={appleLogo} alt="Apple Logo" className="logo" />
                        <span className="button-text">Se connecter avec Apple</span>
                      </button>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <button className="btn btn-custom btn-equal-size">
                        <img src={facebookLogo} alt="Facebook Logo" className="logo" />
                        <span className="button-text">Se connecter avec Facebook</span>
                      </button>
                    </div>
                  </div>
                </div>

              </form>
              
            </div>
          </div>
        </div >
      </div>
    </>
  );
};

export default CustomerLogin;