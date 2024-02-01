import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/Paiement.module.css";

const Card = () => {
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
    <main className="page shopping-cart-page">
  <section className="clean-block clean-cart dark">
    <div className="container">
      <div className="block-heading">
        <h2 className="text-info">Paiement</h2>
        <p>
          Bienvenue dans l'univers passionnant&nbsp; de Shiny ! Notre équipe
          dévouée travaille sans relâche pour vous offrir une expérience
          exceptionnelle.&nbsp;
        </p>
      </div>
      <div className="content">
        <div className="row g-0">
          <div className="col-md-12 col-lg-8">
            <div className="items">
              <div className="product">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-3">
                    <div className="product-image">
                      <img
                        className="img-fluid d-block mx-auto image"
                        src="assets/img/tech/téléchargement%20(2).jpg"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 product-info">
                    <a className="product-name" href="#">
                      Coiffure Enfant
                    </a>
                    <div className="product-specs">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                  <div className="col-6 col-md-2 quantity">
                    <label
                      className="form-label d-none d-md-block"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="form-control quantity-input"
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-6 col-md-2 price">
                    <span>$120</span>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-3">
                    <div className="product-image">
                      <img
                        className="img-fluid d-block mx-auto image"
                        src="assets/img/tech/téléchargement%20(1).jpg"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 product-info">
                    <a className="product-name" href="#">
                      Coiffure Homme
                    </a>
                    <div className="product-specs" />
                  </div>
                  <div className="col-6 col-md-2 quantity">
                    <label
                      className="form-label d-none d-md-block"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="form-control quantity-input"
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-6 col-md-2 price">
                    <span>$120</span>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-3">
                    <div className="product-image">
                      <img
                        className="img-fluid d-block mx-auto image"
                        src="assets/img/tech/téléchargement.jpg"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 product-info">
                    <a className="product-name" href="#">
                      Coiffure Femme
                    </a>
                    <div className="product-specs" />
                  </div>
                  <div className="col-6 col-md-2 quantity">
                    <label
                      className="form-label d-none d-md-block"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="form-control quantity-input"
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-6 col-md-2 price">
                    <span>$120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="summary">
              <h3>Summary</h3>
              <h4>
                <span className="text">Subtotal</span>
                <span className="price">$360</span>
              </h4>
              <h4>
                <span className="text">Discount</span>
                <span className="price">$0</span>
              </h4>
              <h4>
                <span className="text">Shipping</span>
                <span className="price">$0</span>
              </h4>
              <h4>
                <span className="text">Total</span>
                <span className="price">$360</span>
              </h4>
              <a
                className="btn btn-primary btn-lg active d-block w-100"
                role="button"
                href="payment-page.html"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  );
};

export default Card;