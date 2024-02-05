import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Telephone from "../components/Telephone";
import Header from "../components/Header";
import "../assets1/csu.css";

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

  const signUp = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-6 left-side d-none d-lg-block"></div>

          <div className="col right-side d-flex flex-column  vh-100 vh-100-mobile justify-content-center">
            <div className="card form-container shadow p-3 mb-5 bg-white rounded">

              <p className="text-center justify-content-center" style={{ fontSize: 20 }}>
                <span style={{ color: "pink" }}>Réjoinez nous</span> et bénéficiez des milliers soins ou et quand vous
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
                  <Telephone />
                </div>
                <br />
                <div className="address">
                  <fieldset className="">Adress *</fieldset>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Entrer votre address.."
                  />
                  <br />
                  <div className="row">
                    <div className="col-lg-6 p-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Regions, ville.."
                      />
                    </div>
                    <div className="col-lg-6 p-2">
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
                    <button onClick={signUp} className="btn1 submit">S’enregistrer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default CustomerSignUp;