import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/Paiement.module.css";

const Paiement = () => {
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

  const onAddPaymentMethodClick = useCallback(() => {
    navigate("/paiement-others");
  }, [navigate]);

  const onFactureTextClick = useCallback(() => {
    navigate("/identification-russie");
  }, [navigate]);

  return (
    <main className="page payment-page">
  <section className="clean-block payment-form dark" style={{ height: "auto" }}>
    <div className="container" style={{ height: "auto" }}>
      <div className="block-heading">
        <h2 className="text-info">Paiement&nbsp;</h2>
      </div>
      <form className="mb-xxl-3" style={{ height: "auto" }}>
        <div className="products" style={{ background: "rgb(255,255,255)" }}>
          <h3 className="title">Checkout</h3>
          <div className="item">
            <span className="price">$120</span>
            <p className="item-name">Coiffure Enfant</p>
          </div>
          <div className="item">
            <span className="price">$120</span>
            <p className="item-name">Coiffure Homme</p>
          </div>
          <div className="item">
            <span className="price">$120</span>
            <p className="item-name">Coiffure Femme</p>
          </div>
          <div className="total">
            <span>Total</span>
            <span className="price">$360</span>
          </div>
        </div>
        <h3 className="title" style={{ textAlign: "center" }}>
          Choisissez votre méthode de paiement
        </h3>
        <div className="card-details" style={{ marginBottom: 0 }}>
          <div className="row" style={{ width: "auto" }}>
            <div className="col">
              <div data-bss-hover-animate="pulse" style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/OM.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-2"
                >
                  Orange Money
                </span>
              </div>
            </div>
            <div className="col" data-bss-hover-animate="pulse">
              <div style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/MOMO.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-4"
                >
                  MTN Money
                </span>
              </div>
            </div>
            <div className="col" data-bss-hover-animate="pulse">
              <div style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/moneygo.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-4"
                >
                  MoneyGO
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-xxl-3 mb-xxl-2" style={{ width: "auto" }}>
            <div className="col">
              <div data-bss-hover-animate="pulse" style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/paysafecard.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-2"
                >
                  Carte Pré-payée
                </span>
              </div>
            </div>
            <div className="col" data-bss-hover-animate="pulse">
              <div style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/wave.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify",
                    marginRight: 0
                  }}
                  className="ms-xxl-4"
                >
                  &nbsp; &nbsp; &nbsp;Wave
                </span>
              </div>
            </div>
            <div className="col" data-bss-hover-animate="pulse">
              <div style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/yup.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-4"
                >
                  &nbsp; &nbsp; &nbsp; YUP
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-xxl-3 mb-xxl-2" style={{ width: "auto" }}>
            <div className="col">
              <div data-bss-hover-animate="pulse" style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/images.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-2"
                >
                  Carte Bancaire
                </span>
              </div>
            </div>
            <div className="col" data-bss-hover-animate="pulse">
              <div style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/dohone.jpeg"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-4"
                >
                  &nbsp;DOHONE
                </span>
              </div>
            </div>
            <div className="col" data-bss-hover-animate="pulse">
              <div style={{ width: 135 }}>
                <img
                  className="img-fluid ms-xxl-4"
                  src="assets/img/cash.png"
                  style={{
                    borderRadius: 120,
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderStyle: "solid",
                    boxShadow: "0px 0px 10px"
                  }}
                  width={100}
                  height={100}
                />
                <code>
                  <br />
                </code>
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: '"Arial Regular"',
                    textAlign: "justify"
                  }}
                  className="ms-xxl-4"
                >
                  &nbsp; &nbsp; &nbsp;Cash
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</main>
  );
};

export default Paiement;