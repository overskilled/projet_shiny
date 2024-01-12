import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Header from "../components/Header";
import styles from "./css/Acceuil.module.css";

const Acceuil = () => {
  const navigate = useNavigate();

  const onNosServicesTextClick = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onBoutonConnexionContainerClick = useCallback(() => {
    navigate("/desktop-10");
  }, [navigate]);

  const onBoutonAjouterTablissementClick = useCallback(() => {
    navigate("/professinel-choice");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  const onBoutonSearchIconClick = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

  return (
    <div className={styles.acceuil}>
      <Footer elginStCelinaTop="6525px" />
      <div className={styles.section6}>
        <div className={styles.card}>
          <div className={styles.cardChild} />
          <div className={styles.text}>
            <div className={styles.text1}>
              <b className={styles.b}>
                <span>
                  <span className={styles.span}>01</span>
                  <span className={styles.span1}>{` `}</span>
                  <span className={styles.span2}>/</span>
                </span>
                <span className={styles.span2}>
                  <span>05</span>
                </span>
              </b>
              <div className={styles.wowVeryAmazing}>
                Wow! Very amazing. Thanks for the products from Shiny, I really
                love using skin products to help me out in the sun! I'm waiting
                for an amazing new product :)
              </div>
            </div>
            <div className={styles.stevanusPutri}>Stevanus Putri</div>
          </div>
        </div>
        <img className={styles.path02Icon} alt="" src="/path-02@2x.png" />
        <div className={styles.pagenation}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.arrowRightParent}>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright.svg"
            />
            <img
              className={styles.arrowRightIcon1}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
        <img
          className={styles.section6Child}
          alt=""
          src="/rectangle-26@2x.png"
        />
      </div>
      <div className={styles.section5}>
        <div className={styles.whatCustomersSay}>
          What customers say about our services and products
        </div>
        <img className={styles.path01Icon} alt="" src="/path-01@2x.png" />
        <div className={styles.button}>
          <div className={styles.text2}>
            <div className={styles.seeMore}>See More</div>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
        </div>
        <Products
          productImageId="/image@2x.png"
          productDescription="Tagea Cream"
          propLeft="119px"
          propAlignItems="flex-start"
          propTop="73px"
          propGap="156px"
          propJustifyContent="center"
        />
        <Products
          productImageId="/image@2x.png"
          productDescription="Solid Black Cream"
          propLeft="530px"
          propAlignItems="center"
          propTop="73px"
          propGap="87px"
          propJustifyContent="center"
          propWidth="unset"
        />
        <Products
          productImageId="/image@2x.png"
          productDescription="Navy Cream"
          propLeft="117px"
          propAlignItems="center"
          propTop="616px"
          propGap="unset"
          propJustifyContent="space-between"
          propWidth="375px"
        />
        <Products
          productImageId="/image@2x.png"
          productDescription="Green Light Cream"
          propLeft="530px"
          propAlignItems="flex-start"
          propTop="616px"
          propGap="unset"
          propJustifyContent="space-between"
          propWidth="375px"
        />
        <div className={styles.card02}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.title}>
            <div className={styles.washCream}>Wash Cream</div>
            <div className={styles.icon1}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.8</div>
            </div>
          </div>
          <div className={styles.text3}>
            <div className={styles.text4}>
              <div className={styles.fcfa}>10000FCFA</div>
              <div className={styles.text5}>
                <div className={styles.div1}>30%</div>
              </div>
            </div>
            <b className={styles.fcfa1}>70000FCFA</b>
          </div>
        </div>
        <div className={styles.card01}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.title1}>
            <div className={styles.washCream}>Pingky Cream</div>
            <div className={styles.icon1}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.7</div>
            </div>
          </div>
          <div className={styles.text3}>
            <div className={styles.text4}>
              <div className={styles.fcfa}>10000FCFA</div>
              <div className={styles.text5}>
                <div className={styles.div1}>30%</div>
              </div>
            </div>
            <b className={styles.fcfa1}>70000FCFA</b>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.variousShinyProducts}>
          Various Shiny products
        </div>
        <div className={styles.consultYourProblemWithTheParent}>
          <div className={styles.consultYourProblem}>
            Consult your problem with the experts
          </div>
          <div className={styles.overcomeTreatmentProblems}>
            Overcome treatment problems by getting free consultations from
            health experts from various countries that we have provided`
          </div>
          <div className={styles.button1} onClick={onButtonContainer1Click}>
            <div className={styles.div}>Consultant Now</div>
          </div>
        </div>
        <img className={styles.section4Child} alt="" src="/vector-1.svg" />
        <img className={styles.pathIcon} alt="" src="/path@2x.png" />
        <div className={styles.image}>
          <img
            className={styles.imageChild}
            alt=""
            src="/rectangle-16@2x.png"
          />
          <div className={styles.frontViewWomanDoingSpaTre} />
        </div>
        <div className={styles.card1}>
          <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
          <div className={styles.text9}>
            <div className={styles.solidBlackCream}>Solid Black Cream</div>
            <div className={styles.icon3}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.div}>4.8</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.section31}>
          <div className={styles.image1}>
            <img className={styles.imageIcon3} alt="" src="/image@2x.png" />
            <img className={styles.icon4} alt="" src="/icon@2x.png" />
          </div>
          <div className={styles.card2}>
            <div className={styles.card3}>
              <div className={styles.text10}>
                <div className={styles.quoteToday}>Quote today</div>
                <div className={styles.everyTimeYou}>
                  “ Every time you create beauty around you, you restore your
                  own soul. So be a great woman from the outside and inside “
                </div>
              </div>
              <div className={styles.aliceWalker}>Alice Walker</div>
            </div>
            <img className={styles.pathIcon1} alt="" src="/path@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.section2Child} />
        <div className={styles.card4}>
          <div className={styles.card11}>
            <img className={styles.imageIcon4} alt="" src="/image@2x.png" />
            <div className={styles.text11}>
              <div className={styles.div5}>02</div>
              <div className={styles.serenityMassages}>Serenity Massages</div>
              <div className={styles.indulgeInBlissfulContainer}>
                <p className={styles.indulgeInBlissfulRelaxation}>
                  <span
                    className={styles.indulgeInBlissful}
                  >{`Indulge in blissful relaxation with `}</span>
                  <span className={styles.our}>our</span>
                  <span className={styles.rejuvenatingMassagesEscape}>
                    {" "}
                    rejuvenating massages. Escape the stress, unwind, and let
                    our skilled therapists soothe
                  </span>
                </p>
                <p className={styles.yourSenses}>your senses.</p>
              </div>
            </div>
          </div>
          <div className={styles.card21}>
            <div className={styles.beautyIsPartContainer}>
              <p className={styles.indulgeInBlissfulRelaxation}>
                Beauty is part of the
              </p>
              <p className={styles.indulgeInBlissfulRelaxation}>
                privilege of women
              </p>
            </div>
            <div className={styles.text12}>
              <div className={styles.div5}>01</div>
              <div className={styles.serenityMassages}>Radiant Glow Await</div>
              <div className={styles.revitalizeYourSkinContainer}>
                <p
                  className={styles.indulgeInBlissfulRelaxation}
                >{`Revitalize your skin and embrace a luminous glow with our premium `}</p>
                <p
                  className={styles.indulgeInBlissfulRelaxation}
                >{`skincare treatments. From rejuvenating facials to tailored  skincare `}</p>
                <p className={styles.indulgeInBlissfulRelaxation}>
                  regimens, discover the secret to radiant beauty at our
                </p>
                <p className={styles.indulgeInBlissfulRelaxation}>
                  sanctuary of indulgence.
                </p>
              </div>
            </div>
            <img className={styles.imageIcon5} alt="" src="/image@2x.png" />
          </div>
        </div>
        <img className={styles.pathIcon2} alt="" src="/path@2x.png" />
        <div className={styles.button2} onClick={onButtonContainer2Click}>
          <div className={styles.div}>View All Services</div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.text13}>
          <div className={styles.image2} />
          <div className={styles.image3} />
          <div className={styles.beautyIsPart1}>
            Beauty is part of women's privileges still do body care to always
            maintain your beautiful features. Let's join other women to get
            products from the latest Brand.
          </div>
        </div>
      </div>
      <div className={styles.background} />
      <div className={styles.background} />
      <img
        className={styles.photoDePrsentation}
        alt=""
        src="/photo-de-prsentation@2x.png"
      />
      <b className={styles.bookA}>Book a ...</b>
      <div className={styles.materialSymbolssearch} />
      <div className={styles.barreDeRecherche}>
        <div className={styles.searchBarre} />
        <img
          className={styles.boutonSearchIcon}
          alt=""
          src="/bouton-search.svg"
          onClick={onBoutonSearchIconClick}
        />
        <div className={styles.instituteSearch}>
          <div className={styles.barreDeRecherche1} />
          <div className={styles.specialisteInstitute}>
            Specialiste, Institute ...
          </div>
        </div>
        <div className={styles.locationSearch}>
          <div className={styles.barreDeRecherche2} />
          <div className={styles.location}>{`Location `}</div>
        </div>
      </div>
      <b className={styles.beautyCareAt}>Beauty care at hand.</b>
      <b className={styles.welcomeToShinyContainer}>
        <span>
          <span>Welcome to</span>
          <span className={styles.span4}>{` `}</span>
        </span>
        <span className={styles.shiny}>Shiny</span>
        <span className={styles.span4}>{` `}</span>
      </b>
      <Header
        connectionLabel="connexion"
        connectionId="/materialsymbolsperson.svg"
        showBoutonConnexion
        showRectangleDiv
        showBoutonAjouterTablissement
        rectangleDivVisible
        showAjouterVotreTablissement
        propTop="0px"
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
        onBoutonConnexionContainerClick={onBoutonConnexionContainerClick}
        onBoutonAjouterTablissementClick={onBoutonAjouterTablissementClick}
      />
    </div>
  );
};

export default Acceuil;
