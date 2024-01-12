import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Coupon from "../components/Coupon";
import styles from "./css/IdentificationRussie.module.css";

const IdentificationRussie = () => {
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

  const onProceedContainerClick = useCallback(() => {
    navigate("/paiement");
  }, [navigate]);

  return (
    <div className={styles.identificationRussie}>
      <Header
        connectionLabel="Nom_user"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion
        showRectangleDiv
        showBoutonAjouterTablissement
        rectangleDivVisible
        showAjouterVotreTablissement
        propTop="-1px"
        propCursor="pointer"
        propHeight="53.56%"
        propWidth="12.06%"
        propTop1="22.67%"
        propRight="1.54%"
        propBottom="23.78%"
        propLeft="86.4%"
        propHeight1="100%"
        propWidth1="100%"
        propTop2="0%"
        propRight1="0%"
        propBottom1="0%"
        propLeft1="0%"
        propHeight2="37.76%"
        propWidth2="44.18%"
        propTop3="33.4%"
        propLeft2="31.39%"
        propHeight3="62.24%"
        propWidth3="16.3%"
        propTop4="17.84%"
        propRight2="77.3%"
        propBottom2="19.92%"
        propLeft3="6.39%"
        propHeight4="53.56%"
        propWidth4="17.45%"
        propRight3="15.28%"
        propBottom3="23.78%"
        propHeight5="100%"
        propWidth5="100%"
        propTop5="0%"
        propRight4="0%"
        propBottom4="0%"
        propLeft4="0%"
        propHeight6="37.76%"
        propWidth6="79.51%"
        propTop6="33.4%"
        propLeft5="10.03%"
        onNosServicesTextClick={onNosServicesTextClick}
        onShinyLogoTextClick={onShinyLogoTextClick}
        onBoutonConnexionContainerClick={onBoutonConnexionContainerClick}
        onBoutonAjouterTablissementClick={onBoutonAjouterTablissementClick}
      />
      <Footer elginStCelinaTop="1433px" />
      <div className={styles.infosDePaiement}>
        <div className={styles.cadre} />
        <div className={styles.location}>
          <b className={styles.localisation}>Douala</b>
          <img className={styles.locationIcon} alt="" src="/location@2x.png" />
        </div>
        <div className={styles.avis}>
          <div className={styles.avis1}>{`4.0 ( 1000 avis) `}</div>
          <img className={styles.starIcon} alt="" src="/star@2x.png" />
        </div>
        <b className={styles.titreService}>{`Shiny Coiffure `}</b>
        <div className={styles.prestationSelect}>
          <div className={styles.cadre1} />
          <div className={styles.prestation}>Coupe Garçon - 14 ans</div>
          <div className={styles.tempsPrix}>{`30 min `}</div>
          <div className={styles.tempsPrix1}> 8000 XAF</div>
          <div className={styles.prestationSelectChild} />
        </div>
        <div className={styles.dateEtHeureSelect}>
          <div className={styles.cadre2} />
          <div className={styles.date}>Vendredi 12 Janvier</div>
          <div className={styles.heure}>à 11 : 00</div>
          <img
            className={styles.dateEtHeureSelectChild}
            alt=""
            src="/ellipse-18.svg"
          />
        </div>
        <div className={styles.infosDePaiementChild} />
        <div className={styles.titreService1}>Prestation sélectionnée</div>
        <div className={styles.titreService2}>
          Date et l’heure sélectionnées
        </div>
        <div
          className={styles.titreService3}
        >{`Informations de Paiement `}</div>
        <div className={styles.titreService4}>{`Prestataire `}</div>
      </div>
      <div className={styles.modifier} onClick={onModifierTextClick}>
        modifier
      </div>
      <div className={styles.orderSummary}>
        <div className={styles.orderSummary1}>Order Summary</div>
        <div className={styles.details}>
          <div className={styles.price}>
            <div className={styles.fcfa}>Price</div>
            <b className={styles.fcfa}>8000 FCFA</b>
          </div>
          <div className={styles.price}>
            <div className={styles.fcfa}>Discount</div>
            <b className={styles.fcfa}>0 FCFA</b>
          </div>
          <div className={styles.price}>
            <div className={styles.fcfa}>Shipping</div>
            <div className={styles.free}>Free</div>
          </div>
          <div className={styles.price}>
            <div className={styles.fcfa}>Coupon Applied</div>
            <b className={styles.fcfa}>0 FCFA</b>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.details}>
          <div className={styles.total1}>
            <div className={styles.fcfa}>TOTAL</div>
            <div className={styles.fcfa3}>8000 FCFA</div>
          </div>
          <div className={styles.delivery}>
            <div className={styles.fcfa}>Estimated Delivery by</div>
            <div className={styles.button}>12 Jan, 2024</div>
          </div>
          <Coupon
            displayText="Coupon Code"
            showTrailingIcon
            placeholderFontFamily="Arial"
          />
          <div className={styles.proceed} onClick={onProceedContainerClick}>
            <img className={styles.plusIcon} alt="" src="/plus.svg" />
            <div className={styles.button}>Place Your Order and Pay</div>
            <img className={styles.plusIcon} alt="" src="/plus.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationRussie;
