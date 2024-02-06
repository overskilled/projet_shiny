import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import "../assets1/bootstrap/css/bootstrap.min.css"
import "../assets1/paiement.css"

const Paiement = () => {
  // const navigate = useNavigate()

  return (
    <>
    <Navbar />
    <main className="page payment-page">
  <section className="clean-block payment-form dark" style={{ height: "auto" }}>
    <div className="container" style={{ height: "auto" }}>
      <div className="block-heading" >
        <h2 style={{marginTop: 40, color: "#FC8D8D"}}>Paiement&nbsp;</h2>
      </div>
      <form className="mb-xxl-3" style={{ height: "auto" }}>
        <div className="products" style={{ background: "rgb(255,255,255)" }}>
          <h3 className="title">Checkout</h3>
          <div className="item">
            <span className="price">3000 XAF</span>
            <p className="item-name">Coiffure Enfant</p>
          </div>
          <div className="item">
            <span className="price">2000 XAF</span>
            <p className="item-name">Coiffure Homme</p>
          </div>
          <div className="item">
            <span className="price">5000 XAF</span>
            <p className="item-name">Coiffure Femme</p>
          </div>
          <div className="total">
            <span>Total</span>
            <span className="price">10000 XAF</span>
          </div>
        </div>
        <h3 className="title" style={{ textAlign: "center" }}>
          Choisissez votre méthode de paiement
        </h3>
        <div className="container d-flex justify-content-center align-items-center">
        <section class="moyens">
          <article class="moyen moyen--1" >
            <div class="moyen__info-hover">
            </div>
            <div class="moyen__img"></div>
            <a href="#" class="moyen_link">
              <div class="moyen__img--hover"></div>
            </a>
            <div class="moyen__info">
              <span class="moyen__name">Orange Money</span>
            </div>
          </article>
          <article class="moyen moyen--2" style={{ width: "100%" }}>
            <div class="moyen__info-hover">
            </div>
            <div class="moyen__img"></div>
            <a href="#" class="moyen_link">
              <div class="moyen__img--hover"></div>
            </a>
            <div class="moyen__info">
              <span class="moyen__name">MTN MOMO</span>
            </div>
          </article>
          <article class="moyen moyen--3" style={{ width: "100%" }}>
            <div class="moyen__info-hover">
            </div>
            <div class="moyen__img"></div>
            <a href="#" class="moyen_link">
              <div class="moyen__img--hover"></div>
            </a>
            <div class="moyen__info">
              <span class="moyen__name">Carte Bancaire</span>
            </div>
          </article>
          <article class="moyen moyen--4" style={{ width: "100%" }}>
            <div class="moyen__info-hover">
            </div>
            <div class="moyen__img"></div>
            <a href="#" class="moyen_link">
              <div class="moyen__img--hover"></div>
            </a>
            <div class="moyen__info">
              <span class="moyen__name">Cash</span>
            </div>
          </article>
        </section>
      </div>
      </form>
    </div>
  </section>
</main>
<Footer />
</>
  );
};

export default Paiement;