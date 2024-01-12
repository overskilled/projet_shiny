import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/ServiceChoisi.module.css";

const ServiceChoisi = () => {
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

  const onChoisirBoutonContainerClick = useCallback(() => {
    navigate("/configuration-du-paiement");
  }, [navigate]);

  return (
    <div className={styles.serviceChoisi}>
      <Header
        connectionLabel="connexion"
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
      <Footer elginStCelinaTop="3166px" />
      <div className={styles.boutonSelect}>
        <div className={styles.barreDeRecherche} />
        <b className={styles.prendreRdv}>Prendre RDV</b>
      </div>
      <img
        className={styles.illustrationIcon}
        alt=""
        src="/illustration@2x.png"
      />
      <img
        className={styles.illustrationIcon1}
        alt=""
        src="/illustration@2x.png"
      />
      <img
        className={styles.illustrationIcon2}
        alt=""
        src="/illustration@2x.png"
      />
      <img
        className={styles.illustrationIcon3}
        alt=""
        src="/illustration@2x.png"
      />
      <img
        className={styles.illustrationIcon4}
        alt=""
        src="/illustration@2x.png"
      />
      <div className={styles.location}>
        <b className={styles.localisation}>Douala</b>
        <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      </div>
      <div className={styles.location1}>
        <b className={styles.localisation}>Douala</b>
        <img className={styles.locationIcon} alt="" src="/location@2x.png" />
      </div>
      <div className={styles.avis}>
        <div className={styles.avis1}>{`4.0 ( 1000 avis) `}</div>
        <img className={styles.starIcon} alt="" src="/star@2x.png" />
      </div>
      <b className={styles.titreService}>{`Shiny Coiffure `}</b>
      <b className={styles.titreService1}>
        Réserver en ligne pour un RDV chez Shiny Coiffure
      </b>
      <b className={styles.titreService2}>Horaires d’ouverture</b>
      <b className={styles.titreService3}>{`où se situe le salon ? `}</b>
      <b className={styles.titreService4}>
        <p className={styles.collaborateurs}>Collaborateurs</p>
      </b>
      <b className={styles.titreService5}>à propos</b>
      <b className={styles.titreService6}>Choix de la prestation</b>
      <div className={styles.titreService7}>Cheveux ENFANT</div>
      <div className={styles.titreService8}>Cheveux HOMME</div>
      <b className={styles.titreService9}>
        24h/24 - Paiement sur place - Confirmation immédiate
      </b>
      <b className={styles.voirPlus}>Voir les 5 photos</b>
      <div className={styles.noteGlobaleGnrale}>
        <div className={styles.noteGlobale} />
        <div className={styles.noteGlobale1} />
        <div className={styles.noteGlobale2} />
        <div className={styles.notation}>{`Acceuil `}</div>
        <div className={styles.indice}>4</div>
        <div className={styles.indice1}>4</div>
        <div className={styles.indice2}>4</div>
        <div className={styles.notation1}>propreté</div>
        <div className={styles.notation2}>Qualité de prestation</div>
        <div className={styles.notation3}>1000 clients ont donné leur avis</div>
        <b className={styles.notation4}>4.0</b>
      </div>
      <div className={styles.serviceChoisiChild} />
      <div className={styles.serviceChoisiItem} />
      <div className={styles.categorie}>
        <div className={styles.cadre} />
        <div className={styles.prestation}>Coupe Garçon - 14 ans</div>
        <div className={styles.prestation1}>Coupe Fille</div>
        <div className={styles.tempsPrix}>30 min - 8000 XAF</div>
        <div className={styles.tempsPrix1}>30 min - 8000 XAF</div>
        <div
          className={styles.choisirBouton}
          onClick={onChoisirBoutonContainerClick}
        >
          <div className={styles.barreDeRecherche1} />
          <b className={styles.choisir}>Choisir</b>
        </div>
        <div className={styles.choisirBouton1}>
          <div className={styles.barreDeRecherche1} />
          <b className={styles.choisir}>Choisir</b>
        </div>
        <div className={styles.sparation} />
      </div>
      <div className={styles.categorie1}>
        <div className={styles.cadre1} />
        <div className={styles.prestationPrix}>
          <div className={styles.prestation2}>coupe étudiant</div>
          <div className={styles.tempsPrix2}>30 min - 8000 XAF</div>
          <div className={styles.choisirBouton2}>
            <div className={styles.barreDeRecherche1} />
            <b className={styles.choisir}>Choisir</b>
          </div>
        </div>
        <div className={styles.prestationPrix1}>
          <div className={styles.prestation3}>coupe étudiant + Coiffage</div>
          <div className={styles.tempsPrix3}>30 min - 8000 XAF</div>
          <div className={styles.choisirBouton2}>
            <div className={styles.barreDeRecherche1} />
            <b className={styles.choisir}>Choisir</b>
          </div>
        </div>
        <div className={styles.prestationPrix2}>
          <div className={styles.prestation3}>Coupe + coiffage</div>
          <div className={styles.tempsPrix3}>30 min - 8000 XAF</div>
          <div className={styles.choisirBouton2}>
            <div className={styles.barreDeRecherche1} />
            <b className={styles.choisir}>Choisir</b>
          </div>
        </div>
        <div className={styles.prestationPrix3}>
          <div className={styles.prestation3}>Coupe + shampoing</div>
          <div className={styles.tempsPrix3}>30 min - 8000 XAF</div>
          <div className={styles.choisirBouton2}>
            <div className={styles.barreDeRecherche1} />
            <b className={styles.choisir}>Choisir</b>
          </div>
        </div>
        <div className={styles.prestationPrix4}>
          <div className={styles.prestation3}>Coupe Fille</div>
          <div className={styles.tempsPrix3}>30 min - 8000 XAF</div>
          <div className={styles.choisirBouton2}>
            <div className={styles.barreDeRecherche1} />
            <b className={styles.choisir}>Choisir</b>
          </div>
        </div>
        <div className={styles.sparation} />
        <div className={styles.sparation2} />
        <div className={styles.sparation3} />
        <div className={styles.sparation4} />
      </div>
      <b className={styles.titreService10}>{`Note Globale `}</b>
      <div className={styles.jour}>{`Lundi `}</div>
      <div className={styles.heure}>11:00 - 18: 00</div>
      <div className={styles.heure1}>11:00 - 18: 00</div>
      <div className={styles.heure2}>11:00 - 18: 00</div>
      <div className={styles.heure3}>11:00 - 18: 00</div>
      <div className={styles.heure4}>11:00 - 18: 00</div>
      <div className={styles.heure5}>Fermé</div>
      <div className={styles.heure6}>11:00 - 18: 00</div>
      <div className={styles.jour1}>Mardi</div>
      <div className={styles.jour2}>{`Mercredi `}</div>
      <div className={styles.jour3}>{`Jeudi `}</div>
      <div className={styles.jour4}>Vendredi</div>
      <div className={styles.jour5}>{`Samedi `}</div>
      <div className={styles.jour6}>Dimanche</div>
      <img className={styles.carteIcon} alt="" src="/carte@2x.png" />
      <div className={styles.collaborateursBox}>
        <div className={styles.collabBox} />
        <div className={styles.collaborateursBoxChild} />
        <div className={styles.collaborateursBoxItem} />
        <div className={styles.collaborateursBoxInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.collaborateursBoxChild1} />
        <div className={styles.collaborateursBoxChild2} />
        <div className={styles.collaborateursBoxChild3} />
        <div className={styles.collaborateursBoxChild4} />
        <b className={styles.nameCollab}>Steven</b>
        <b className={styles.nameCollab1}>Dilan</b>
        <b className={styles.nameCollab2}>Yvan</b>
        <b className={styles.nameCollab3}>Zeze</b>
        <b className={styles.nameCollab4}>Laurent</b>
        <b className={styles.nameCollab5}>Samuel</b>
        <b className={styles.nameCollab6}>Vladimir</b>
        <b className={styles.nameCollab7}>Afficher plus</b>
        <div className={styles.initialGroup}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>S</b>
        </div>
        <div className={styles.initialGroup1}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>D</b>
        </div>
        <div className={styles.initialGroup2}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>Y</b>
        </div>
        <div className={styles.initialGroup3}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>Y</b>
        </div>
        <div className={styles.initialGroup4}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>Y</b>
        </div>
        <div className={styles.initialGroup5}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>Y</b>
        </div>
        <div className={styles.initialGroup6}>
          <div className={styles.cercleDePrsentation} />
          <b className={styles.initial}>Z</b>
        </div>
        <div className={styles.initialGroup7}>
          <div className={styles.cercleDePrsentation7} />
          <b className={styles.initial}>+2</b>
        </div>
      </div>
      <div className={styles.bienvenueChezShinyContainer}>
        <span>{`
Bienvenue chez `}</span>
        <b>Shiny Coiffure</b>
        <span>{`, l'institut de beauté où élégance rime avec innovation. Niché au cœur de la ville de Douala, notre équipe passionnée vous offre des coupes de cheveux sur mesure et des services esthétiques pour sublimer votre beauté. Détendez-vous dans notre atmosphère chaleureuse et laissez-nous révéler votre éclat naturel. Chez `}</span>
        <b>Shiny Coiffure</b>
        <span>, la beauté devient une expérience inoubliable.</span>
      </div>
    </div>
  );
};

export default ServiceChoisi;
