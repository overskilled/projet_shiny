import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../assets1/choice.css";

const Choice = () => {
  const navigate = useNavigate();

  const onPro = useCallback(() => {
    navigate("/professional-registration");
  }, [navigate]);

  const onInstitute = useCallback(() => {
    navigate("/institute-registration");
  }, [navigate]);

  return (
    <>
    <Navbar />
    <div className="choice">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="graphic">
        <div className="graphic">
        </div>
        </div>
        <section class="cards">

          <article class="card card--1" onClick={onPro}>
            <div class="card__info-hover">
            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
              <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Je suis </span>
              <h3 class="card__title">Un professionnel </h3>
              <span class="card__by"><a href="#" class="card__author" title="author">Connecter</a> vous à nous</span>
            </div>
          </article>


          <article class="card card--2" onClick={onInstitute} style={{ width: "100%" }}>
            <div class="card__info-hover">


            </div>
            <div class="card__img"></div>
            <a href="#" class="card_link">
              <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
              <span class="card__category"> Nous sommes</span>
              <h3 class="card__title">Une institute</h3>
              <span class="card__by"><a href="#" class="card__author" title="author">Connecter</a> vous à nous</span>
            </div>
          </article>



        </section>
      </div>
    </div>
    </>
  );
};

export default Choice;