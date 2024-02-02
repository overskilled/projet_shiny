import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// import Products from "../components/Products";
import Header from "../components/Header";

const Acceuil = () => {
  const navigate = useNavigate();

  const onNosServicesTextClick = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onBoutonConnexionContainerClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  const onBoutonAjouterTablissementClick = useCallback(() => {
    navigate("/professinel-choice");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/choix-service");
  }, [navigate]);

  const onSearch = useCallback(() => {
    navigate("/reservation-services");
  }, [navigate]);

  return (
    <>
    <Header />
  <section className="py-4 py-xl-5" style={{ background: "var(--bs-success)" }}>
    <div className="container d-flex justify-content-between">
      <div style={{ paddingTop: 70, width: 700 }}>
        <div className="d-flex align-items-center justify-content-xxl-start">
          <p
            className="fw-bold d-xxl-flex align-items-xxl-end"
            style={{ fontSize: 50, fontFamily: "arial", maxWidth: "293.594px" }}
          >
            Welcome to&nbsp;
          </p>
          <p
            className="d-xxl-flex align-items-xxl-end"
            style={{
              color: "#F07777",
              fontSize: 70,
              fontFamily: "arial",
              fontWeight: "bold"
            }}
          >
            Shiny
          </p>
        </div>
        <p style={{ fontSize: 34, fontWeight: "bold", fontFamily: "arial" }}>
          Beauty care at hand.
        </p>
        <p 
          style={{
            fontWeight: "bold",
            fontSize: 35,
            color: "#FF9090",
            paddingTop: 90
          }}
        >
          Book a ...
        </p>
      </div>
      <div>
        <img
          src="assets/img/Photo%20de%20présentation.png"
          style={{ width: 470 }}
        />
      </div>
    </div>
    <div
      className="d-flex justify-content-around align-items-center"
      style={{
        width: 750,
        paddingLeft: 0,
        marginLeft: 113,
        background: "#FFFEFE",
        height: 70,
        borderRadius: 30
      }}
    >
      <input
        className="placeholder form-control-lg"
        type="text"
        style={{
          background: "#E9E9E9",
          width: 350,
          height: 52,
          borderRadius: 20,
          borderStyle: "none",
          borderColor: "#E9E9E9",
          borderTopColor: "#E9E9E9",
          borderRightColor: "#E9E9E9",
          borderBottomColor: "#E9E9E9",
          borderLeftStyle: "none",
          borderLeftColor: "#E9E9E9",
          color: "#302B2B"
        }}
        placeholder="Spécialiste, Institute ..."
      />
      <input
        className="placeholder form-control-lg"
        type="text"
        style={{
          background: "#E9E9E9",
          width: 300,
          height: 52,
          borderRadius: 20,
          borderTopStyle: "none",
          borderRightStyle: "none",
          borderBottomWidth: 0,
          borderBottomColor: "#E9E9E9",
          borderLeftStyle: "none",
          borderLeftColor: "var(--bs-black)"
        }}
        placeholder="Location"
      />
      <img src="assets/img/bouton%20search.png" style={{cursor: "pointer"}}  onClick={onSearch}/>
    </div>
  </section>
  <div className="container" style={{ width: "75%", marginTop: 20 }}>
    <img src="assets/img/Image%20(10).png" style={{ marginLeft: 853 }} />
    <p 
      style={{
        fontSize: 48,
        color: "#3A2D32",
        textAlign: "center",
        marginTop: "-70px"
      }}
    >
      <br />
      Beauty is part of women's privileges still do body care to always maintain
      your beautiful features. Let's join other women to get products from the
      latest Brand.
      <br />
      <br />
    </p>
    <img
      src="assets/img/Image%20(10).png"
      style={{ marginTop: "-80px", marginLeft: 237 }}
    />
  </div>
  <div
    className="container d-flex justify-content-between"
    style={{ width: "83%" }}
  >
    <div>
      <img
        src="assets/img/Ellipse%201.png"
        style={{ marginTop: "-319px", marginLeft: "-112px" }}
      />
      <img
        src="assets/img/Image.png"
        style={{ marginTop: 35, marginLeft: "-251px" }}
      />
      <div style={{ width: 478, marginBottom: 76 }}>
        <p
          style={{
            marginTop: 40,
            color: "#221E42",
            fontSize: 48,
            fontWeight: "bold",
            fontFamily: "Playfair Display"
          }}
        >
          01
        </p>
        <p
          style={{
            color: "#FF9090",
            fontSize: 40,
            fontFamily: "Playfair Display",
            fontWeight: "bold",
            marginTop: "-9px"
          }}
        >
          Serenity Massages
        </p>
        <p
          style={{
            fontSize: 20,
            color: "#565656",
            fontFamily: "Playfair Display",
            fontWeight: "bold",
            marginTop: "-12px"
          }}
        >
          Indulge in blissful relaxation with our rejuvenating massages. Escape
          the stress, unwind, and let our skilled therapists soothe your sense
        </p>
        <button
          className="btn btn-primary"
          type="button"
          style={{
            width: 192,
            height: 56,
            fontFamily: "DM sans-serif",
            color: "rgb(245,245,245)",
            fontWeight: "bold",
            borderRadius: 0,
            background: "#221E42",
            borderStyle: "none"
          }}
        >
          View all Services
        </button>
      </div>
    </div>
    <div style={{ marginLeft: 103 }}>
      <div className="d-flex">
        <div>
          <p
            style={{
              color: "#FF9090",
              fontSize: 52,
              fontFamily: "Playfair Display",
              width: 475,
              marginTop: 18
            }}
          >
            Beauty is part of the privilege of women
          </p>
          <p
            style={{
              fontSize: 48,
              color: "#221E42",
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              marginTop: 40
            }}
          >
            02
          </p>
          <p style={{ color: "#FF9090", fontSize: 40, fontWeight: "bold" }}>
            Radiant Glow Await
          </p>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              fontSize: 20,
              color: "#565656"
            }}
          >
            Revitalize your skin and embrace a luminous glow with our premium
            skincare treatments, discover the secret to radiant beauty at our
            sanctuary of indulgence
          </p>
        </div>
        <div>
          <img
            src="assets/img/Vector%20(4).png"
            style={{ marginRight: "-13px" }}
          />
        </div>
      </div>
      <img
        src="assets/img/Image%20(1).png"
        style={{ width: 570, height: 467 }}
      />
    </div>
  </div>
  <div className="d-flex" style={{ height: 500 }}>
    <div
      className="d-flex flex-column justify-content-center"
      style={{ width: 622, background: "#E8C59759" }}
    >
      <div style={{ marginRight: 119, marginLeft: 119, marginTop: 71 }}>
        <p
          style={{
            color: "#FF9090",
            fontSize: 15,
            fontFamily: "DM sans-serif"
          }}
        >
          Quote Today
        </p>
        <p style={{ fontSize: 25, fontFamily: "Playfair Display" }}>
          "Every time you create beauty around you, you restore your own soul.
          So be a great human from the inside and outside. "
        </p>
        <p style={{ fontFamily: "DM sans-serif", marginTop: 71 }}>
          Alice Walker
        </p>
        <img
          src="assets/img/Vector.png"
          style={{ width: 250, marginLeft: "-119px", marginTop: "-135px" }}
        />
      </div>
    </div>
    <div
      style={{
        background: "url(assets/img/Image%20(2).png)",
        width: "60%",
        textAlign: "center"
      }}
    >
      <img
        src="assets/img/Icon.png"
        style={{ textAlign: "center", marginTop: 196 }}
      />
    </div>
  </div>
  <div className="container" style={{ width: "86%", marginTop: 87 }}>
    <div className="d-xl-flex d-xxl-flex" style={{ width: "initial" }}>
      <div style={{ width: 531 }}>
        <p
          style={{
            color: "#FF9090",
            fontFamily: "Playfair Display",
            fontSize: 50
          }}
        >
          Consult your problem&nbsp; with the experts
        </p>
        <p
          style={{
            color: "#565656",
            fontSize: 18,
            fontFamily: "DM sans-serif",
            width: 502,
            lineHeight: "34.74px",
            letterSpacing: 1
          }}
        >
          Overcome treatment problems by getting free consultations from health
          experts from various countries that we have provided
        </p>
        <button
          className="btn btn-primary"
          type="button"
          style={{
            background: "#221E42",
            borderStyle: "none",
            borderRadius: 0,
            color: "rgb(255,255,255)",
            fontFamily: "DM sans-serif",
            fontWeight: "bold",
            paddingTop: 8,
            paddingRight: 32,
            paddingLeft: 32,
            paddingBottom: 8,
            marginTop: 30
          }}
        >
          Consult Now
        </button>
      </div>
      <img
        className="img-fluid visible"
        src="assets/img/Vector%201.png"
        style={{ width: 355, height: 211, marginLeft: 150 }}
      />
    </div>
    <div className="d-flex">
      <img
        src="assets/img/Vector%20(1).png"
        style={{
          width: 309,
          height: 284,
          marginTop: 123,
          marginLeft: "-51px",
          marginRight: 170
        }}
      />
      <img src="assets/img/Rectangle%2016.png" style={{ marginTop: "-96px" }} />
      <div style={{ marginLeft: 64 }}>
        <img src="assets/img/Image%20(3).png" style={{ marginTop: "-137px" }} />
        <div
          className="d-flex justify-content-between align-content-center"
          style={{ marginTop: 16 }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#3A2D32",
              fontFamily: "DM sans-serif"
            }}
          >
            Solid Black Cream
          </p>
          <div className="d-flex align-content-center">
            <img
              src="assets/img/star.png"
              style={{ height: 16, marginTop: 4, marginRight: 8 }}
            />
            <p
              style={{
                fontFamily: "DM sans-serif",
                color: "#3A2D32",
                fontWeight: "bold"
              }}
            >
              4.8
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p
    style={{
      color: "#FF9090",
      fontFamily: "Playfair Display",
      fontSize: 50,
      textAlign: "center",
      marginTop: 130
    }}
  >
    Various Shiny Products
  </p>
  <div className="d-flex flex-column align-items-center">
    <div className="container" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-md-4" style={{ width: 350, marginRight: 40 }}>
          <img src="assets/img/Image%20(4).png" style={{ width: 350 }} />
          <div className="d-flex justify-content-between">
            <p
              style={{
                color: "#3A2D32",
                fontWeight: "bold",
                fontSize: 28,
                fontFamily: "Playfair Display"
              }}
            >
              Tagea Cream
            </p>
            <div className="d-flex">
              <img
                width={16}
                height={16}
                src="assets/img/star.png"
                style={{
                  height: 16,
                  width: 16,
                  marginTop: 11,
                  marginRight: 10
                }}
              />
              <p
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  marginTop: 5
                }}
              >
                4.8
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: "bold",
                  textDecoration: "line-through",
                  marginRight: 16
                }}
              >
                10000 FCFA
              </p>
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "bold",
                  width: 50,
                  background: "rgba(255,0,0,0.1)",
                  borderRadius: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 4,
                  paddingBottom: 4,
                  marginTop: "-6px"
                }}
              >
                30%
              </p>
            </div>
            <p
              style={{
                color: "#FE9986",
                fontWeight: "bold",
                fontFamily: "DM Sans"
              }}
            >
              7000FCFA
            </p>
          </div>
        </div>
        <div className="col-md-4" style={{ width: 350, marginRight: 40 }}>
          <img src="assets/img/Image%20(5).png" style={{ width: 350 }} />
          <div className="d-flex justify-content-between">
            <p
              style={{
                color: "#3A2D32",
                fontSize: 28,
                fontFamily: "Playfair Display",
                fontWeight: "bold"
              }}
            >
              Solid Black Cream
            </p>
            <div className="d-flex">
              <img
                src="assets/img/star.png"
                style={{ height: "16PX", marginTop: 11, marginRight: 10 }}
              />
              <p
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 5
                }}
              >
                4.8
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                style={{
                  textDecoration: "line-through",
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  marginRight: 16
                }}
              >
                10000 FCFA
              </p>
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "bold",
                  background: "rgba(255,0,0,0.1)",
                  borderRadius: 8,
                  width: 50,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 4,
                  paddingBottom: 4,
                  marginTop: "-6px"
                }}
              >
                30%
              </p>
            </div>
            <p
              style={{
                fontWeight: "bold",
                color: "#FE9986",
                fontFamily: "DM Sans"
              }}
            >
              7000FCFA
            </p>
          </div>
        </div>
        <div className="col-md-4" style={{ width: 350 }}>
          <img src="assets/img/Image%20(6).png" style={{ width: 350 }} />
          <div className="d-flex justify-content-between">
            <p
              style={{
                color: "#3A2D32",
                fontWeight: "bold",
                fontFamily: "Playfair Display",
                fontSize: 28
              }}
            >
              Pinky Cream
            </p>
            <div className="d-flex">
              <img
                src="assets/img/star.png"
                style={{ height: "16PX", marginTop: 11, marginRight: 10 }}
              />
              <p
                style={{
                  fontSize: 20,
                  fontFamily: "DM sans-serif",
                  fontWeight: "bold",
                  marginTop: 5
                }}
              >
                4.8
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                style={{
                  textDecoration: "line-through",
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  borderRadius: 8,
                  marginRight: 16
                }}
              >
                10000FCFA
              </p>
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "bold",
                  background: "rgba(255,0,0,0.1)",
                  borderRadius: 8,
                  width: 50,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 4,
                  paddingBottom: 4,
                  marginTop: "-6px"
                }}
              >
                30%
              </p>
            </div>
            <p
              style={{
                fontWeight: "bold",
                color: "#FE9986",
                fontFamily: "DM Sans"
              }}
            >
              7000FCFA
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{ width: 350, marginRight: 40 }}>
          <img src="assets/img/Image%20(7).png" style={{ width: 350 }} />
          <div className="d-flex justify-content-between">
            <p
              style={{
                color: "#3A2D32",
                fontSize: "28PX",
                fontFamily: "Playfair Display",
                fontWeight: "bold"
              }}
            >
              Navy Cream
            </p>
            <div className="d-flex">
              <img
                width={100}
                height={80}
                src="assets/img/star.png"
                style={{
                  width: 16,
                  height: 16,
                  marginTop: 11,
                  marginRight: 10
                }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  fontSize: 20,
                  marginTop: 5
                }}
              >
                4.8
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                style={{
                  textDecoration: "line-through",
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  marginRight: 16
                }}
              >
                10000FCFA
              </p>
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "bold",
                  background: "rgba(255,0,0,0.1)",
                  borderRadius: 8,
                  width: 50,
                  paddingRight: 8,
                  paddingLeft: 8,
                  paddingBottom: 4,
                  paddingTop: 4,
                  marginTop: "-6px"
                }}
              >
                30%
              </p>
            </div>
            <p
              style={{
                fontWeight: "bold",
                color: "#FE9986",
                fontFamily: "DM Sans"
              }}
            >
              7000FCFA
            </p>
          </div>
        </div>
        <div className="col-md-4" style={{ width: 350, marginRight: 40 }}>
          <img src="assets/img/Image%20(8).png" style={{ width: 350 }} />
          <div className="d-flex justify-content-between">
            <p
              style={{
                color: "#3A2D32",
                fontWeight: "bold",
                fontFamily: "Playfair Display",
                fontSize: "28PX"
              }}
            >
              Green Light Cream
            </p>
            <div className="d-flex">
              <img
                src="assets/img/star.png"
                style={{ height: "16PX", marginTop: 11, marginRight: 10 }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  fontSize: 20,
                  marginTop: 5
                }}
              >
                4.8
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                style={{
                  fontWeight: "bold",
                  textDecoration: "line-through",
                  fontFamily: "DM Sans",
                  marginRight: 16
                }}
              >
                10000FCFA
              </p>
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "bold",
                  background: "rgba(255,0,0,0.1)",
                  borderRadius: 8,
                  width: 50,
                  paddingRight: 8,
                  paddingLeft: 8,
                  paddingBottom: 4,
                  paddingTop: 4,
                  marginTop: "-6px"
                }}
              >
                30%
              </p>
            </div>
            <p
              style={{
                color: "#FE9986",
                fontWeight: "bold",
                fontFamily: "DM Sans"
              }}
            >
              7000FCA
            </p>
          </div>
        </div>
        <div className="col-md-4" style={{ width: 350 }}>
          <img src="assets/img/Image%20(9).png" style={{ width: 350 }} />
          <div
            className="d-flex justify-content-between"
            style={{ marginRight: 16 }}
          >
            <p
              style={{
                color: "#3A2D32",
                fontSize: 28,
                fontFamily: "Playfair Display",
                fontWeight: "bold"
              }}
            >
              Wash Cream
            </p>
            <div className="d-flex">
              <img
                src="assets/img/star.png"
                style={{ height: "16PX", marginTop: 11, marginRight: 10 }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "DM Sans",
                  fontSize: 20,
                  marginTop: 5
                }}
              >
                4.8
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                style={{
                  fontWeight: "bold",
                  textDecoration: "line-through",
                  fontFamily: "DM Sans",
                  marginRight: 16
                }}
              >
                10000FCFA
              </p>
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "bold",
                  background: "rgba(255,0,0,0.1)",
                  borderRadius: 8,
                  width: 50,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 4,
                  paddingBottom: 4,
                  marginTop: "-6px"
                }}
              >
                30%
              </p>
            </div>
            <p
              style={{
                color: "#FE9986",
                fontWeight: "bold",
                fontFamily: "DM Sans"
              }}
            >
              7000FCFA
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      className="btn btn-primary"
      type="button"
      style={{
        width: 185,
        height: 56,
        borderRadius: 0,
        borderColor: "#221E42",
        color: "rgb(0,0,0)",
        background: "rgb(254,254,254)",
        marginTop: 40,
        fontSize: 18,
        fontFamily: "DM Sans",
        fontWeight: "bold"
      }}
    >
      See More -&gt;
    </button>
  </div>
  <div
    className="d-flex justify-content-between align-items-center"
    style={{ marginTop: 15 }}
  >
    <p
      style={{
        color: "#FF9090",
        fontFamily: "Playfair Display",
        fontSize: 50,
        width: 685,
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: 163
      }}
    >
      What Customers says about our services and products
    </p>
    <img src="assets/img/Vector%20(2).png" />
  </div>
  <div>
    <div className="d-flex">
      <img
        src="assets/img/Vector%20(3).png"
        style={{ height: 260, marginRight: "-49px", marginLeft: 0 }}
      />
      <div>
        <div
          className="d-flex justify-content-between"
          style={{ width: 1198, background: "#FFEFD7", marginRight: 121 }}
        >
          <div style={{ marginLeft: 120, marginTop: 56 }}>
            <p
              style={{
                color: "#FE9986",
                fontSize: 64,
                fontFamily: "Playfair Display",
                fontWeight: "bold"
              }}
            >
              01 / 04
            </p>
            <p
              style={{
                fontFamily: "Playfair Display",
                fontSize: 20,
                width: 461,
                lineHeight: "38.6px",
                textAlign: "left",
                paddingRight: 90
              }}
            >
              Wow! Very amazing. Thanks for the products from Shiny, I really
              love using skin products to help me out in the sun! I'm waiting
              for an amazing nw product ;)
            </p>
            <p
              style={{
                fontSize: 20,
                fontFamily: "DM Sans",
                fontWeight: "bold",
                marginTop: 40
              }}
            >
              Mirabelle Claudine
            </p>
          </div>
          <img src="assets/img/Rectangle%2026.png" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: 1198, marginTop: 20 }}
        >
          <img
            className="d-flex justify-content-between"
            width={100}
            height={80}
            src="assets/img/Frame%20115.png"
            style={{ width: 86, height: 10 }}
          />
          <div>
            <img
              src="assets/img/arrow-right%20(1).png"
              style={{ marginRight: 16 }}
            />
            <img src="assets/img/arrow-right.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>

  );
};

export default Acceuil;