import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./css/InstituteLogin.module.css";

const CustomerSignUp = () => {
  const navigate = useNavigate();

  const onNosServicesTextClick = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onShinyLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBoutonConnexionContainerClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  const onBoutonAjouterTablissementClick = useCallback(() => {
    navigate("/professinel-choice");
  }, [navigate]);

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>customer Signup</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .form-control:focus {\n            border-color: rgba(255, 189, 189, 1);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 189, 189, 1);\n        }\n\n        .form-control {\n            border-radius: 10px;\n        }\n\n        .btn {\n            padding-left: 100px;\n            padding-right: 100px;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            color: white;\n            background-color: rgba(255, 189, 189, 1);\n            border-radius: 15px;\n            transition: background-color 0.3s, color 0.3s;\n            /* Smooth transition for background-color and color */\n        }\n\n        .btn:hover {\n            background-color: rgba(255, 100, 100, 1);\n            color: white;\n        }\n\n        .left-side {\n        background-image: url('./sidder.jpg'); \n        background-size: cover;\n        background-position: center;\n        background-repeat: no-repeat;\n        height: 100vh;  \n    }\n    "
    }}
  />
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 left-side"></div>
      <div className="spacer" />
      <div className="col-lg-6 right-side">
        <div className="container">
          <div className="card my-5 shadow p-3 mb-5 bg-body rounded">
            <div className="card-body my-5 ">
              <p className="text-center">
                Réjoinez nous et bénéficiez des milliers soins ou et quand vous
                le souhaitez.
              </p>
              <br />
              <form action="">
                <div className="name">
                  <fieldset className="p-2">Nom complet *</fieldset>
                  <div className="d-flex ">
                    <input
                      type="text"
                      className="form-control mr-3 "
                      placeholder="Prénom.."
                    />
                    <input
                      type="text"
                      className="form-control mr-3 "
                      placeholder="Nom.."
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <fieldset className="p-2">Email *</fieldset>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter votre email.."
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 mt-3 mt-md-0">
                    <fieldset className="p-2">Telephone*</fieldset>
                    <div className="input-group">
                      <input type="tel" id="phone" className="form-control" />
                    </div>
                  </div>
                  {/* Include jQuery (Required) */}
                  {/* Include intlTelInput JS */}
                  {/* Include intlTelInput utils JS */}
                </div>
                <br />
                <div className="address">
                  <fieldset className="p-2">Adress *</fieldset>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Entrer votre address.."
                  />
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Regions, ville.."
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Quartier.."
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <button className="btn submit">S’enregistrer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  );
};

export default CustomerSignUp;