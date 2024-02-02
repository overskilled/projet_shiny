import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
//   const navigate = useNavigate();

//   const onNosServicesTextClick = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

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
      height: 651,
      marginTop: 100,
      maxWidth: "100%",
      background: "#221E42"
    }}
  >
    <div className="row">
      <div
        className="col-md-6"
        style={{
          marginLeft: 125,
          marginTop: 102,
          width: 380,
          marginRight: 144
        }}
      >
        <img src="assets/img/Shiny%20Logo.png" />
        <p
          style={{
            fontFamily: "DM Sans",
            color: "rgba(255, 255, 255, 0.70)",
            width: 370,
            textAlign: "justify",
            marginTop: 16
          }}
        >
          This ia a company engage in beauty in 2023. This has made more than
          2023 products every day since its establishment. This is the only
          beauty company that is the top ranking one in all of Cameroon and
          Ivory Coast
        </p>
        <div className="d-flex" style={{ marginTop: "57.5px" }}>
          <img
            src="assets/img/Icon%20(1).png"
            style={{ height: 24, marginBottom: 24, marginRight: 24 }}
          />
          <p style={{ fontFamily: "DM Sans", color: "rgb(255,255,255)" }}>
            (237) 6 80 46 25 09 - (225) 6 90 46 25 09
          </p>
        </div>
        <div className="d-flex">
          <img
            src="assets/img/Icon%20(2).png"
            style={{ marginBottom: 24, marginRight: 24, width: 24 }}
          />
          <p style={{ fontFamily: "DM Sans", color: "rgb(248,248,248)" }}>
            JFN - HUI Bonamoussadi, Douala
          </p>
        </div>
        <div className="d-flex">
          <img
            src="assets/img/Icon%20(3).png"
            style={{ height: 24, marginRight: 24 }}
          />
          <p style={{ fontFamily: "DM Sans", color: "rgb(247,241,241)" }}>
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
        <div>
          <p style={{ color: "white" }}>Menu</p>
          <p>Home</p>
          <p>Consultant</p>
          <p>Product</p>
          <p>Shop</p>
          <p>About Us</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Product</p>
          <p>Skincare</p>
          <p>Handbody</p>
          <p>Oil</p>
          <p>FashWash</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Service</p>
          <p>order</p>
          <p>Booked</p>
          <p>Payment</p>
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
    <div className="row">
      <div
        className="col-md-12 d-flex justify-content-between align-items-center"
        style={{
          color: "#ffffff",
          fontSize: 14,
          fontFamily: "DM sans-serif",
          marginLeft: 125,
          marginTop: "102.5px",
          width: "80%"
        }}
      >
        <div className="d-flex justify-content-between" style={{ width: 308 }}>
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