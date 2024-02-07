import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import "../assets1/cdp.css"

const ConfigurationDuPaiement = () => {
  const navigate = useNavigate();

  const onReserve = useCallback(() => {
    navigate("/paiement");
    window.scrollTo(0, 0);
  }, [navigate]);


  return (
    <div className="config">
      <Navbar />
      <div className="company " style={{ paddingTop: 100 }}>
        <p
          style={{
            color: "rgb(0,0,0)",
            fontSize: "120%",
            fontFamily: "arial",
            fontWeight: 500,
            alignContent: "center",
            alignItems: "center"
          }}
        >
          Shiny Coiffure
        </p>
        <div className="none" style={{ marginTop: "-13px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              height: 23,
              width: 23,
              background: "rgba(67,60,60,0)",
              marginRight: 5
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
              fill="currentColor"
            />
          </svg>
          <p
            style={{
              marginRight: "19.6px",
              fontWeight: "bold",
              fontSize: 17,
              fontFamily: "arial"
            }}
          >
            Douala
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-star"
            style={{ width: 23, height: 23, marginRight: 5 }}
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
          <p style={{ fontFamily: "arial", fontSize: 17 }}>4.0 (1000 avis)</p>
        </div>
      </div>
      <div
        className="cb"
        style={{ marginTop: 25 }}
      >
        <div style={{ width: "100%", marginRight: 100 }}>
          <p
            style={{
              color: "rgb(0,0,0)",
              fontSize: "100%",
              fontFamily: "arial",
              fontWeight: 500
            }}
          >
            1. Prestation sélectionné
          </p>
          <div
            className="card-box"
            style={{
              marginTop: 18,
              boxShadow: 20
            }}
          >
            <div
              className="d-flex justify-content-between"
              style={{ marginRight: 31, marginLeft: 31, marginTop: 25 }}
            >
              <p style={{ fontSize: "100%", fontFamily: "arial" }}>
                Coupe Garçon - 14 ans
              </p>
              <p style={{ fontSize: "100%", color: "red", fontFamily: "arial" }}>
                Supprimer&nbsp;
              </p>
            </div>
            <div className="d-flex" style={{ marginRight: 0, marginLeft: 31, marginTop: -15 }}>
              <p style={{ marginRight: 15, fontSize: "100%", fontFamily: "arial" }}>
                30 min
              </p>
              <img
                src="assets/img/Image%20(10).png"
                style={{ width: 7, height: 7, marginTop: 10 }}
              />
              <p style={{ marginLeft: 15, fontSize: "100%", fontFamily: "arial" }}>
                8000 XAF
              </p>
            </div>
            <p
              style={{
                marginLeft: 31,
                fontSize: 16,
                fontFamily: "arial",
                fontWeight: "bold",
                marginTop: 2
              }}
            >
              Avec qui ?
            </p>
            <div className="container" style={{ marginLeft: 23, marginBottom: 25 }}>
              <div className="row1">
                <div className="d-flex justify-content-between align-items-center with">
                  <div className="d-flex align-items-center" style={{marginLeft: 10}}>
                    <span style={{ fontWeight: 400 }}>Sans préférence</span>
                  </div>
                  <input type="radio" className="radio" style={{marginRight: 10}}/>
                </div>

                <div className="d-flex justify-content-between align-items-center with">
                  <div className="d-flex align-items-center" style={{marginLeft: 10}}>
                    <div className="id">
                      <span className="id_text">M</span>
                    </div>
                    <span style={{ fontWeight: 400 }}>Marco</span>
                  </div>
                  <input type="radio" className="radio" style={{marginRight: 10}}/>
                </div>

                <div className="d-flex justify-content-between align-items-center with">
                  <div className="d-flex align-items-center" style={{marginLeft: 10}}>
                    <div className="id">
                      <span className="id_text">Z</span>
                    </div>
                    <span style={{ fontWeight: 400 }}>Tonton Zeze</span>
                  </div>
                  <input type="radio" className="radio" style={{marginRight: 10}}/>
                </div>

                <div className="d-flex justify-content-between align-items-center with">
                  <div className="d-flex align-items-center" style={{marginLeft: 10}}>
                    <div className="id">
                      <span className="id_text">T</span>
                    </div>
                    <span style={{ fontWeight: 400 }}>Thom</span>
                  </div>
                  <input type="radio" className="radio" style={{marginRight: 10}}/>
                </div>
              </div>
            </div>
            <select className="select" style={{marginLeft: 20, height: 50, borderRadius: 5}}> {/* Hide on screens larger than mobile */}
                  <option value="">Sans préférence</option>
                  <option value="preference">Marco</option>
                  <option value="preference">Tonton Zeze</option>
                  <option value="preference">Thom</option>
                  {/* Add other options as needed */}
                </select>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              marginTop: 10,
              background: "#000000",
              color: "rgb(254,252,252)",
              border: "none",
              fontSize: 16,
              fontFamily: "arial",
              width: "30%"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.5"
              height="0.5"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-plus-circle"
              style={{
                width: 20,
                borderRadius: 90,
                height: 20,
                marginRight: 7,
                background: "#fcfcfc",
                color: "rgb(7,7,7)"
              }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            <span className="buttext">Ajouter une prestation à la suite</span>
          </button>
        </div>
        <div style={{ marginRight: 40 }}>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "arial",
              fontSize: 20,
              color: "rgb(1,1,1)",
              marginTop: 20
            }}
          >
            2. Choix de la Date et l'heure&nbsp;
          </p>
          <div className="heure-box">
            <table className="table1">
              <tr className="tr">
                <th className="th">Lundi</th>
                <td className="td" onClick={onReserve}>17:00</td>
                <td className="td" onClick={onReserve}>17:00</td>
                <td className="td" onClick={onReserve}>17:00</td>
                <td className="td" onClick={onReserve}>17:00</td>
                <td className="td" onClick={onReserve}>17:00</td>
                <td className="td" onClick={onReserve}>17:00</td>
              </tr>
              <tr className="tr">
                <th className="th">Mardi</th>
                <td className="td">18:00</td>
                <td className="td">12:00</td>
                <td className="td">17:00</td>
                <td className="td">17:00</td>
                <td className="td">17:00</td>
                <td className="td">17:00</td>
              </tr>
              <tr className="tr">
                <th className="th">Mercredi</th>
                <td className="td">18:00</td>
                <td className="td">13:00</td>
              </tr>
              <tr className="tr">
                <th className="th">Jeudi</th>
                <td className="td">13:00</td>
                <td className="td">15:00</td>
                <td className="td">17:00</td>
                <td className="td">12:00</td>
                <td className="td">12:00</td>
              </tr>
              <tr className="tr">
                <th className="th">Vendredi</th>
                <td className="td">18:00</td>
                <td className="td">12:00</td>
                <td className="td">17:00</td>
                <td className="td">17:00</td>
                <td className="td">17:00</td>
                <td className="td">17:00</td>
              </tr>
              <tr className="tr">
                <th className="th">Samedi</th>
                <td className="td">18:00</td>
                <td className="td">12:00</td>
              </tr>
              <tr className="tr">
                <th className="th">Dimanche</th>
                <td className="td">18:00</td>
                <td className="td">12:00</td>
              </tr>
            </table>
            <div className="select" style={{marginTop: 20}}>
              <div className="d-flex align-items-center" style={{width: "90%"}}>
                Date :
                <input type="date" className="heure-data" style={{marginLeft: 20}}/>
              </div>
              <br />
              <div className="d-flex align-items-center" style={{width: "90%"}}>
                Heure :<br></br>  
                <select className="heure-data" style={{marginLeft: 10}}> {/* Hide on screens larger than mobile */}
                  <option value="">Choisir une heure</option>
                  <option value="preference">12h</option>
                  <option value="preference">15h</option>
                  <option value="preference">17h</option>
                  <option value="preference">19h</option>
                  {/* Add other options as needed */}
                </select>
                </div>
                <button style={{
                  marginTop: 10,
                  background: "#000000",
                  color: "rgb(254,252,252)",
                  border: "none",
                  fontSize: 16,
                  fontFamily: "arial",
                  width: "30%"
                }}
                  className="" onClick={onReserve}>Payer</button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default ConfigurationDuPaiement;