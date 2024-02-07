import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../assets1/footer.css"

const Footer = () => {
  const navigate = useNavigate();

  const Home = useCallback(() => {
    navigate("/");
    window.scrollTo(0, 0);
  }, [navigate]);
  const service = useCallback(() => {
    navigate("/reservation-services");
    window.scrollTo(0, 0);
  }, [navigate]);
  const card = useCallback(() => {
    navigate("/card");
    window.scrollTo(0, 0);
  }, [navigate]);

//   const onBoutonConnexionContainerClick = useCallback(() => {
//     navigate("/desktop-10");
//   }, [navigate]);

//   const onBoutonAjouterTablissementClick = useCallback(() => {
//     navigate("/professinel-choice");
//   }, [navigate]);

//   const onButtonContainer1Click = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

//   const onButtonContainer2Click = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

//   const onBoutonSearchIconClick = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

  return (
    <>
        <div
    className="container"
    style={{
      width: "100%",
      marginTop: 100,
      maxWidth: "100%",
      background: "#221E42"
    }}
  >
    <div className="row">
      <div
        className="col-md-6 infos"
        style={{
          marginTop: 102,
          width: 380,
          marginRight: 144
        }}
      >
        <img onClick={Home} src="assets/img/Shiny%20Logo.png" />
        <p
          style={{
            fontFamily: "DM Sans",
            color: "rgba(255, 255, 255, 0.70)",
            width: "90%",
            textAlign: "justify",
            marginTop: 16
          }}
        >
          This ia a company engage in beauty in 2023. This has made more than
          2023 products every day since its establishment. This is the only
          beauty company that is the top ranking one in all of Cameroon and
          Ivory Coast
        </p>
        <div className="d-flex" style={{ marginTop: "57.5px", width: "90%" }}>
          <img
            src="assets/img/Icon%20(1).png"
            style={{ height: 24, marginBottom: 24, marginRight: 24 }}
          />
          <p style={{ fontFamily: "DM Sans", color: "rgb(255,255,255)", fontSize: "90%" }}>
            (237) 6 80 46 25 09 - (225) 6 90 46 25 09
          </p>
        </div>
        <div className="d-flex" style={{width: "90%"}}>
          <img
            src="assets/img/Icon%20(2).png"
            style={{ marginBottom: 24, marginRight: 24, width: 24 }}
          />
          <p style={{ fontFamily: "DM Sans", color: "rgb(248,248,248)", fontSize: "90%" }}>
            JFN - HUI Bonamoussadi, Douala
          </p>
        </div>
        <div className="d-flex">
          <img
            src="assets/img/Icon%20(3).png"
            style={{ height: 24, marginRight: 24 }}
          />
          <p style={{ fontFamily: "DM Sans", color: "rgb(247,241,241)", fontSize: "90%" }}>
            info@shiny.com
          </p>
        </div>
      </div>
      <div
        className="col-md-6 d-flex justify-content-between"
        style={{
          width: 576,
          color: "#FFFFFFB2",
          fontFamily: "DM sans-serif",
          marginTop: 102,
          borderStyle: "none"
        }}
      >
        <div >
          <p onClick={Home} style={{ color: "white" }}>Menu</p>
          <p onClick={Home}>Home</p>
          <p>Consultant</p>
          <p onClick={service}>Product</p>
          <p onClick={service}>Shop</p>
          <p onClick={service}>About Us</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Product</p>
          <p onClick={service}>Skincare</p>
          <p onClick={service}>Handbody</p>
          <p onClick={service}>Oil</p>
          <p onClick={service}>FashWash</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Service</p>
          <p onClick={service}>order</p>
          <p onClick={service}>Booked</p>
          <p onClick={card}>Payment</p>
          <p>Delivery</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Support</p>
          <p>Chat Online</p>
          <p>Call Online</p>
          <p>Language</p>
          <p>Copyright</p>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div
        className="col-md-12 d-flex justify-content-between align-items-center test"
        style={{
          color: "#ffffff",
          fontSize: 14,
          fontFamily: "DM sans-serif",
          marginTop: "102.5px",
          width: "80%"
        }}
      >
        <div className="policies" style={{ width: 308 }}>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Terms of use</p>
        </div>
        <p>© 2021-2022, All Rights Reserved</p>
      </div>
    </div>
  </div>
  </>
  );
};

export default Footer;