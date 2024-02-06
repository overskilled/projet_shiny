import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import "../assets1/bootstrap/css/bootstrap.min.css"

const Card = () => {
  const navigate = useNavigate();

  const onPay = useCallback(() => {
    navigate("/paiement");
  }, [navigate]);

  return (
    <>
    <Navbar />
    <main className="page shopping-cart-page">
  <section className="clean-block clean-cart dark">
    <div className="container">
      <div className="block-heading">
        <h2 style={{color: "#FC8D8D", marginTop: 40}}>Panier</h2>
        <p>
          Bienvenue dans votre panier. Vous retrouverez ici tout les articles que vous 
          avez ajouté dans votre panier ainsi que leurs prix et le prix total.
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
                    <p className="product-name" style={{color: "#221E42"}}>
                      <u>Coiffure Enfant</u>
                    </p>
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
                      Quantité
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="form-control quantity-input"
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-6 col-md-2 price">
                    <span>3000 XAF</span>
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
                    <p className="product-name" style={{color: "#221E42"}}>
                      <u>Coiffure Homme</u>
                    </p>
                    <div className="product-specs" />
                  </div>
                  <div className="col-6 col-md-2 quantity">
                    <label
                      className="form-label d-none d-md-block"
                      htmlFor="quantity"
                    >
                      Quantité
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="form-control quantity-input"
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-6 col-md-2 price">
                    <span>2000 XAF</span>
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
                    <p className="product-name" style={{color: "#221E42"}}>
                      <u>Coiffure Femme</u>
                    </p>
                    <div className="product-specs" />
                  </div>
                  <div className="col-6 col-md-2 quantity">
                    <label
                      className="form-label d-none d-md-block"
                      htmlFor="quantity"
                    >
                      Quantité
                    </label>
                    <input
                      type="number"
                      id="number"
                      className="form-control quantity-input"
                      defaultValue={1}
                    />
                  </div>
                  <div className="col-6 col-md-2 price">
                    <span>5000 XAF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="summary" style={{background: "#fdeaeada"}}>
              <h3>FACTURE</h3>
              <h4>
                <span className="text">Subtotal</span>
                <span className="price">10000 XAF</span>
              </h4>
              <h4>
                <span className="text">Discount</span>
                <span className="price">0 XAF</span>
              </h4>
              <h4>
                <span className="text">Total</span>
                <span className="price">10000 XAF</span>
              </h4>
              <a
                onClick={onPay}
                className="btn btn-primary btn-lg active d-block w-100"
                role="button"
                style={{background: "#FC8D8D", border: "#FC8D8D"}}
              >
                Payer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<Footer />
    </>

  );
};

export default Card;