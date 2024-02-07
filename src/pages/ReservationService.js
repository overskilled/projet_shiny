import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import SearchBarContainer from "../components/SearchBarContainer";
import "../assets1/Reservation.module.css";
import Footer from "../components/Footer";
// import Service from "../components/Service";

const RservationServices = () => {
  const navigate = useNavigate();
  
  const onchoice = useCallback(() => {
    navigate("/choix-service");
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
    <Navbar />
    <div className="container" style={{marginTop: 100}}>
  <div className="row my-5">
    <div className="col text-center mx-auto">
      <h1>Nos services</h1>
      <p className=" text-center p-2">
        "Éveillez votre beauté intérieure et extérieure avec nos services
        bien-être d'exception, pour une expérience sensorielle qui révèle la
        meilleure version de vous-même."
      </p>
      <div id="new-projects" />
    </div>
  </div>
  <button className="btn btnfilter shadow-lg p-2  bg-body ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-filter"
      viewBox="0 0 16 16"
    >
      <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
    </svg>
    Filter
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      
      className="bi bi-arrow-down-short"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
      />
    </svg>
  </button>
  <hr />
  <br />
  <div className="row">
    <div className="col-lg-6 d-flex">
      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 h-100 rounded">
              <img src="./Drip 1.jpg" alt="drip" className="img-fluid" />
            </div>
            <div className="col-md-6 col2">
              <h5>Shiny Coiffure</h5>
              <p className="h6">
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
              <p className="h6">
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
              <br />
              <p className="h6 mb-2">
                Matin :<span className="rounded-pill btn p-2 mr-2 ">Lun</span>
                <span className="rounded-pill btn p-2 mr-2">Mar</span>
                <span className="rounded-pill btn p-2">Mer</span>
              </p>
              <p className="h6 mb-2">
                Soir :<span className="rounded-pill btn p-2 mr-2 ">Lun</span>
                <span className="rounded-pill btn p-2 mr-2">Mar</span>
                <span className="rounded-pill btn p-2">Mer</span>
              </p>
            </div>
          </div>
          <br />
          <div className="row justify-content-between rounded">
            <div className="col-lg-6 align-self-end">
              <p>Plus d'information</p>
            </div>
            <div className="spacer" />
            <div className="col-auto align-self-end">
              <button onClick={onchoice} className="btn3">Prendre RDV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6 d-flex">
      <div className="card shadow-sm p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 h-100 rounded">
              <img src="./Drip 1.jpg" alt="drip" className="img-fluid" />
            </div>
            <div className="col-md-6 col2">
              <h5>Shiny Coiffure</h5>
              <p className="h6">
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
              <p className="h6">
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
              <br />
              <p className="h6 mb-2">
                Matin :<span className="rounded-pill btn p-2 mr-2 ">Lun</span>
                <span className="rounded-pill btn p-2 mr-2">Mar</span>
                <span className="rounded-pill btn p-2">Mer</span>
              </p>
              <p className="h6 mb-2">
                Soir :<span className="rounded-pill btn p-2 mr-2 ">Lun</span>
                <span className="rounded-pill btn p-2 mr-2">Mar</span>
                <span className="rounded-pill btn p-2">Mer</span>
              </p>
            </div>
          </div>
          <br />
          <div className="row justify-content-between rounded">
            <div className="col-lg-6">
              <p>Plus d'information</p>
            </div>
            <div className="spacer" />
            <div className="col-auto align-self-end">
              <button onClick={onchoice} className="btn3">Prendre RDV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</>
  );
};

export default RservationServices;