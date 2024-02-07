import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Telephone from "../components/Telephone";
import "./css/ProRegistration.css";

const ProRegistration = () => {
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

  const [specialites, setSpecialites] = useState([{
    id: 1,
    value: '',
  }]);

  const handleAddSpecialite = () => {
    const newSpecialite = {
      id: specialites.length + 1,
      value: '',
    };
    setSpecialites([...specialites, newSpecialite]);
  };

  const handleRemoveSpecialite = (index) => {
    const newSpecialites = [...specialites];
    newSpecialites.splice(index, 1);
    setSpecialites(newSpecialites);
  };

  const handleSpecialiteChange = (index, event) => {
    const newSpecialites = [...specialites];
    newSpecialites[index].value = event.target.value;
    setSpecialites(newSpecialites);
  };

  return (
    <>
    <Navbar />
    <div className="wrapper">


      <div className="container page">

        <div className="row d-flex justify-content-between">
          <div className="col-lg-7 left-side-pro d-flex flex-column justify-content-center align-items-center vh-100 vh-100-mobile my-5">
            <div className="card w-70 d-flex align-items-center justify-content-center form-container shadow p-4 mb-5 bg-white rounded" style={{marginTop: 100}}>
              <p className="text-center mt-5" style={{ fontWeight: "bold" }}>
                Vous êtes gérant d’un établissement beauté ? <br />
                Un de nos experts vous recontacte
              </p>

              <form action="">

                <div className="name">
                  <fieldset className="p-2">Nom  *</fieldset>
                  <div className="d-flex ">
                    <input
                      type="text"
                      className="form-control mr-3 "
                      placeholder="Entrer votre nom.."
                    />
                  </div>
                </div>

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

                <div className="adresse">
                  <fieldset className="p-2">Adresse</fieldset>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter votre adresse.."
                  />
                </div>

                <fieldset className="p-2">Specialites</fieldset>
                <div>
                  {specialites.map((specialite, index) => (
                    <div className="specialite d-flex p-2" key={specialite.id}>
                      <span className="p-2 bg-secondary">{index + 1}</span>
                      <select
                        className="form-select w-50 ml-2"
                        value={specialite.value}
                        onChange={(event) => handleSpecialiteChange(index, event)}
                      >                           
                        <option value="">Massage</option>
                        <option value="address1">Pédicure</option>
                        <option value="address2">Manicure</option>
                        <option value="address3">Coiffure</option>
                      </select>
                      {index === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-plus-circle mt-2 ml-2"
                          viewBox="0 0 16 16"
                          onClick={handleAddSpecialite}
                          style={{ cursor: 'pointer' }}
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-dash-circle mt-2 ml-2"
                          viewBox="0 0 16 16"
                          onClick={() => handleRemoveSpecialite(index)}>
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                <br />
                <br />
                <div className="row p-3">
                  <div className="col-lg-12 text-center">
                    <button className="btn1 submit">S’enregistrer</button>
                  </div>
                </div>



              </form>
            </div>
          </div>

          <div className="col-lg-5 p-5 right-side  d-none d-lg-flex flex-column justify-content-center my-5">
            <h1 className="" style={{ fontSize: 64, fontWeight: "bold" }}>Vous en <br />avez rêvé</h1>
            <br />
            <span>Libérez vos journées et développez votre business <br />
              avec notre plateforme de réservation beauté.
            </span>
            <br />
            <div className="row p-2">
              <div className="col">
                <i
                  className="far fa-check-circle"
                  style={{ fontSize: 20, color: "#5de26b" }}
                />
                <span style={{ marginLeft: 9, fontWeight: "bold" }}>
                  Plus de 10k utilisateur / mois
                </span>
              </div>
            </div>
            <div className="row p-2">
              <div className="col">
                <i
                  className="far fa-check-circle"
                  style={{ fontSize: 20, color: "#5de26b" }}
                />
                <span style={{ marginLeft: 9, fontWeight: "bold" }}>
                  Sans engagement
                </span>
              </div>
            </div>
            <div className="row p-2">
              <div className="col">
                <i
                  className="far fa-check-circle"
                  style={{ fontSize: 20, color: "#5de26b" }}
                />
                <span style={{ marginLeft: 9, fontWeight: "bold" }}>
                  Sans commission
                </span>
              </div>
            </div>
          </div>
        </div >

      </div >

    </div>
    </>
  );
};

export default ProRegistration;