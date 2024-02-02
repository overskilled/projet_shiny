import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Coupon from "../components/Coupon";
import "../assets1/bootstrap.min.css"

const IdentificationReussi = () => {
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

  const onModifierTextClick = useCallback(() => {
    navigate("/configuration-du-paiement");
  }, [navigate]);

  const onPlace = useCallback(() => {
    navigate("/paiement");
  }, [navigate]);

  return (
    <>
    <Header /> 
    <div style={{ padding: 20 }}>
      <a href="#" style={{ fontSize: 24, textDecoration: "none" }}>
        Modifier
      </a>
    </div>
    <div
      className="row"
      style={{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "rgba(33,37,41,0.33)"
      }}
    >
      <div
        className="col"
        style={{
          margin: 30,
          padding: 30,
          outline: "solid 1px grey",
          borderRadius: 15
        }}
      >
        <h4>Informatiques de Paiement</h4>
        <h4 style={{ marginTop: 40 }}>Prestaire</h4>
        <h5>Shiny Coiffure</h5>
        <div className="row">
          <div
            className="col"
            style={{ display: "flex", height: "100%", alignItems: "center" }}
          >
            <i className="fas fa-map-marker-alt" style={{ marginRight: 10 }} />
            <p style={{ marginBottom: 0 }}>
              <strong>Douala</strong>
            </p>
          </div>
          <div
            className="col"
            style={{ display: "flex", height: "100%", alignItems: "center" }}
          >
            <i className="fas fa-star" style={{ marginRight: 10 }} />
            <p style={{ marginBottom: 0 }}>
              <strong>...</strong>
            </p>
          </div>
        </div>
        <p style={{ marginTop: 30 }}>
          <strong>Prestation Sélectionée</strong>
        </p>
        <div
          style={{
            outline: "solid 1px gray",
            borderRadius: 10,
            padding: 10,
            boxShadow: "gray 0px 1px 6px inset"
          }}
        >
          <p>Coupe Garcon - 14 ans</p>
          <p>30 mins . 8000 XAF</p>
        </div>
        <h5 style={{ marginTop: 30 }}>Date et l'Heure Selcetionées</h5>
        <div
          style={{
            outline: "solid 1px gray",
            borderRadius: 10,
            padding: 10,
            boxShadow: "gray 0px 1px 6px inset"
          }}
        >
          <p>Vendredi 12 Janvier - à 11:00</p>
        </div>
      </div>
      <div
        className="col"
        style={{
          margin: 30,
          padding: 30,
          outline: "solid 1px grey",
          borderRadius: 15
        }}
      >
        <h4 style={{ marginBottom: 50 }}>Order summary</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Price</p>
          <p>
            <strong>8080 FCFA</strong>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Discount</p>
          <p>
            <strong>0 FCFA</strong>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Shipping</p>
          <p>
            <strong>Free</strong>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Coupon Applied</p>
          <p>
            <strong>0 FCFA</strong>
          </p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>TOTAL</p>
          <p>
            <strong>8000 FCFA</strong>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Estimated Delivery By</p>
          <p>
            <strong>12 Jan, 2024</strong>
          </p>
        </div>
        <input
          className="form-control-sm"
          type="text"
          placeholder="Coupon code"
          style={{ width: "100%", border: "none", outline: "solid 1px gray" }}
        />
        <button
          className="btn btn-primary"
          type="button"
          style={{ width: "100%", background: "var(--bs-red)", marginTop: 25 }}
        >
          Place Your Order and Pay
        </button>
      </div>
    </div>
    <Footer />
</>

  );
};

export default IdentificationReussi;