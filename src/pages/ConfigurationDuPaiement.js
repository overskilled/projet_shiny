import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ConfigurationDuPaiement = () => {
  const navigate = useNavigate();


  const onReserve = useCallback(() => {
    navigate("/identification");
  }, [navigate]);


  return (
    <>
    <Header />
  <div style={{ marginTop: 50, marginLeft: 85 }}>
    <p
      style={{
        color: "rgb(0,0,0)",
        fontSize: 24,
        fontFamily: "arial",
        fontWeight: "bold"
      }}
    >
      Shiny Coiffure
    </p>
    <div className="d-flex" style={{ marginTop: "-13px" }}>
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
    className="d-xl-flex d-xxl-flex justify-content-between"
    style={{ marginLeft: 85, marginRight: 85, marginTop: 31 }}
  >
    <div style={{ width: "60%", marginRight: 100 }}>
      <p
        style={{
          color: "rgb(0,0,0)",
          fontSize: 20,
          fontFamily: "arial",
          fontWeight: "bold"
        }}
      >
        1. Prestation sélectionné
      </p>
      <div
        style={{
          width: "100%",
          marginTop: 18,
          borderRadius: 20,
          border: "1px solid #9C9494"
        }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ marginRight: 31, marginLeft: 31, marginTop: 25 }}
        >
          <p style={{ fontSize: 24, fontFamily: "arial" }}>
            Coupe Garçon - 14 ans
          </p>
          <p style={{ fontSize: 18, color: "#058BFB", fontFamily: "arial" }}>
            Supprimer&nbsp;
          </p>
        </div>
        <div className="d-flex" style={{ marginRight: 0, marginLeft: 31 }}>
          <p style={{ marginRight: 15, fontSize: 24, fontFamily: "arial" }}>
            30 min
          </p>
          <img
            src="assets/img/Image%20(10).png"
            style={{ width: 7, height: 7, marginTop: 16 }}
          />
          <p style={{ marginLeft: 15, fontSize: 24, fontFamily: "arial" }}>
            8000 XAF
          </p>
        </div>
        <p
          style={{
            marginLeft: 31,
            fontSize: 24,
            fontFamily: "arial",
            fontWeight: "bold",
            marginTop: 23
          }}
        >
          Avec qui ?
        </p>
        <div className="container" style={{ marginLeft: 23, marginBottom: 25 }}>
          <div className="row">
            <div
              className="col-md-4"
              style={{
                borderRadius: 20,
                border: "1px solid #9C9494",
                width: 150,
                marginRight: 20,
                height: 150
              }}
            >
              <input
                type="radio"
                style={{ width: 25, height: 25, marginTop: 6, marginRight: 0 }}
              />
              <div
                style={{
                  background: "#000000",
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  marginLeft: 17,
                  marginTop: "-13px"
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: 0,
                    color: "rgb(255,255,255)",
                    fontSize: 50,
                    marginBottom: 0,
                    marginTop: 0
                  }}
                >
                  S
                </p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-4px",
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily: "arial"
                }}
              >
                Samuel
              </p>
            </div>
            <div
              className="col-md-4"
              style={{
                borderRadius: 20,
                border: "1px solid #9C9494",
                width: 150,
                marginRight: 20,
                height: 150
              }}
            >
              <input
                type="radio"
                style={{ width: 25, height: 25, marginTop: 6, marginRight: 0 }}
              />
              <div
                style={{
                  background: "#000000",
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  marginLeft: 17,
                  marginTop: "-13px"
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: 0,
                    color: "rgb(255,255,255)",
                    fontSize: 50,
                    marginBottom: 0,
                    marginTop: 0
                  }}
                >
                  S
                </p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-4px",
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily: "arial"
                }}
              >
                Samuel
              </p>
            </div>
            <div
              className="col-md-4"
              style={{
                borderRadius: 20,
                border: "1px solid #9C9494",
                width: 150,
                marginRight: 20,
                height: 150
              }}
            >
              <input
                type="radio"
                style={{ width: 25, height: 25, marginTop: 6, marginRight: 0 }}
              />
              <div
                style={{
                  background: "#000000",
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  marginLeft: 17,
                  marginTop: "-13px"
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: 0,
                    color: "rgb(255,255,255)",
                    fontSize: 50,
                    marginBottom: 0,
                    marginTop: 0
                  }}
                >
                  S
                </p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-4px",
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily: "arial"
                }}
              >
                Samuel
              </p>
            </div>
            <div
              className="col-md-4"
              style={{
                borderRadius: 20,
                border: "1px solid #9C9494",
                width: 150,
                marginRight: 40,
                height: 150
              }}
            >
              <input
                type="radio"
                style={{ width: 25, height: 25, marginTop: 6, marginRight: 0 }}
              />
              <div
                style={{
                  background: "#000000",
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  marginLeft: 17,
                  marginTop: "-13px"
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: 0,
                    color: "rgb(255,255,255)",
                    fontSize: 50,
                    marginBottom: 0,
                    marginTop: 0
                  }}
                >
                  S
                </p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-4px",
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily: "arial"
                }}
              >
                Samuel
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          marginTop: 28,
          background: "#000000",
          color: "rgb(254,252,252)",
          fontSize: 24,
          fontFamily: "arial",
          width: "100%"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="bi bi-plus-circle"
          style={{
            width: 36,
            borderRadius: 90,
            height: 36,
            marginRight: 7,
            background: "#fcfcfc",
            color: "rgb(7,7,7)"
          }}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        Ajouter une prestation à la suite
      </button>
    </div>
    <div style={{ marginRight: 40 }}>
      <p
        style={{
          fontWeight: "bold",
          fontFamily: "arial",
          fontSize: 20,
          color: "rgb(1,1,1)"
        }}
      >
        2. Choix de la Date et l'heure&nbsp;
      </p>
      <div className="d-flex justify-content-start" style={{ marginTop: 70 }}>
        <p style={{ fontSize: 15, fontWeight: "bold", marginTop: 1 }}>
          Date :&nbsp;
        </p>
        <input
          type="date"
          style={{
            fontSize: 20,
            textAlign: "center",
            marginLeft: 20,
            width: 200,
            height: 30,
            borderRadius: 20,
            borderWidth: 1
          }}
        />
      </div>
      <div className="d-flex justify-content-start" style={{ marginTop: 30 }}>
        <p
          className="justify-content-between"
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginRight: 8,
            marginTop: 2
          }}
        >
          Heure :&nbsp;
        </p>
        <select
          style={{
            width: 200,
            fontSize: 20,
            textAlign: "center",
            height: 30,
            borderRadius: 20
          }}
        >
          <optgroup label="Choisir une date">
            <option value={12} selected="">
              11 : 30
            </option>
            <option value={13}>12 : 00</option>
            <option value="">12 : 30</option>
            <option value="">13 : 00</option>
          </optgroup>
        </select>
      </div>
      <button onClick={onReserve}>Reserver Maintenenant</button>
    </div>
  </div>
  <Footer />
</>

  );
};

export default ConfigurationDuPaiement;