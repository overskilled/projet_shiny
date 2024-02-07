import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import SearchBarContainer from "../components/SearchBarContainer";
import Footer from "../components/Footer";
import "../assets1/choice.css";
import Navbar from "../components/Navbar/Navbar";
// import Service from "../components/Service";


const RservationServices = () => {
  const navigate = useNavigate();

  const onSelect = useCallback(() => {
    navigate("/configuration-du-paiement");
  }, [navigate]);

  return (
    <div className="">
      <Navbar />
      <div className="container" style={{marginTop: 100}}>
        <div className="row justify-content-between my-5">
          <div className="col-auto">
            <h1>Shiny</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Douala
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              4.0 (1000 avis)
            </p>
          </div>
          <div className="spacer" />
          <div className="col-auto align-self-end">
            <button className="btn1 p-3" type="button">
              Prendre RDV
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="card flex-fill">
              <img className="card-img w-100 d-block" src="Drip 1.jpg" alt="drip" />
            </div>
          </div>
          <div className="col-lg-6 testfile">
            <div className="row align-items-stretch">
              <div className="col-md-6">
                <div className="card h-100">
                  <img
                    className="card-img w-100 d-block "
                    src="Drip 1.jpg"
                    alt="drip"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <img
                    className="card-img w-100 d-block"
                    src="Drip 1.jpg"
                    alt="drip"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <img
                    className="card-img w-100 d-block"
                    src="Drip 1.jpg"
                    alt="drip"
                  />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="card h-100">
                  <img
                    className="card-img w-100 d-block"
                    src="Drip 1.jpg"
                    alt="drip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="text">
          <h3>Réserver en ligne pour un RDV chez Shiny Coiffure</h3>
          <p>24h/24 - Paiement sur place - Confirmation immédiate</p>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-8">
            <h3>Choix de la prestation</h3>
            <br />
            <h4>Massage</h4>
            <br />
            <div className="card w-100">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Catégorie</th>
                      <th>Prix</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Massage suédois</b>
                      </td>
                      <td>15000FCFA</td>
                      <td>
                        <button onClick={onSelect} className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Massage thaïlandais</b>
                      </td>
                      <td>51000FCFA</td>
                      <td>
                        <button onClick={onSelect} className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Massage deep tissue (tissus profonds) </b>
                      </td>
                      <td>51000FCFA</td>
                      <td>
                        <button onClick={onSelect} className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Massage shiatsu</b>
                      </td>
                      <td>51000FCFA</td>
                      <td>
                        <button onClick={onSelect} className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <h4>Coiffure Hommes</h4>
            <br />
            <div className="card w-100">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Catégorie</th>
                      <th>Prix</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Taper Fade</b>
                      </td>
                      <td>1000FCFA</td>
                      <td>
                        <button className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Locks + gommage</b>
                      </td>
                      <td>1000FCFA</td>
                      <td>
                        <button className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Afro</b>
                      </td>
                      <td>1000FCFA</td>
                      <td>
                        <button className="btn2  p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Degradé</b>
                      </td>
                      <td>1000FCFA</td>
                      <td>
                        <button className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Tresse</b>
                      </td>
                      <td>1000FCFA</td>
                      <td>
                        <button className="btn2 p-2">Choisir</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <br />
            <div className="map">
              <h3>où se situe le salon ?</h3>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>{" "}
                Douala
              </p>

              <div className="card">
                <div className="card-body">
                  <img className="img-fluid" src="./google-maps.jpg" alt="" />
                </div>
              </div>
            </div>
            
            <br />
            <br />         
            <div className="about">
                <h3>À propos de nous</h3>
                <hr />
                <p>
                  Bienvenue chez <b>Shiny Coiffure</b>, l'institut de beauté où élégance
                  rime avec innovation. Niché au cœur de la ville de Douala, notre équipe
                  passionnée vous offre des coupes de cheveux sur mesure et des services
                  esthétiques pour sublimer votre beauté. Détendez-vous dans notre
                  atmosphère chaleureuse et laissez-nous révéler votre éclat naturel. Chez{" "}
                  <b>Shiny</b>
                  Coiffure, la beauté devient une expérience inoubliable.
                </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h3>
              Horaire
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
            </h3>
            <div className="card w-100 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Lundi</b>
                </div>
                <div>8:00 - 17:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Mardi</b>
                </div>
                <div>8:00 - 17:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Mardi</b>
                </div>
                <div>8:00 - 17:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Mercredi</b>
                </div>
                <div>8:00 - 17:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Jeudi</b>
                </div>
                <div>8:00 - 17:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Vendredi</b>
                </div>
                <div>8:00 - 17:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Samedi</b>
                </div>
                <div>8:00 - 12:00</div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b>Dimanche</b>
                </div>
                <div>Fermé</div>
              </div>
            </div>
          </div>
        </div>
        <div id="new-projects" />
      </div>
      <Footer />
    </div>
  );
};

export default RservationServices;