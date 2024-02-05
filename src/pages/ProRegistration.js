import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const ProRegistration = () => {
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

  return (
    <>
      <Header />


      <div className="container-fluid">

        <div className="row">
          <div className="col-lg-6 left-side-pro d-flex flex-column  vh-100 vh-100-mobile justify-content-center">
            <div className="card form-container shadow p-3 mb-5 bg-white rounded">
              <p className="text-center justify-content-center" >Vous êtes gérant d’un établissement beauté ?</p>
              <p className="text-center justify-content-center" >Un de nos experts vous recontacte</p>

              <form action="">
                <div className="name">
                  <fieldset className="p-2">Nom de l'institute *</fieldset>
                  <div className="d-flex ">
                    <input
                      type="text"
                      className="form-control mr-3 "
                      placeholder="Prénom.."
                    />
                  </div>
                </div>
              </form>
            </div>
            left side
          </div>

          <div className="col-lg-6 right-side">
            right side
          </div>
        </div>

      </div>




      <main className="page registration-page">
        <section
          style={{
            paddingLeft: 0,
            marginBottom: 2,
            background:
              'url("assets/img/WhatsApp%20Image%202024-01-25%20at%2009.22.49%20(2).jpeg") no-repeat',
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-xxl-5"
                style={{
                  background: "#ffffff",
                  paddingTop: 30,
                  marginTop: 40,
                  borderRadius: 0,
                  height: 911,
                  marginBottom: 36,
                  boxShadow: "0px 0px 12px 0px rgb(0,0,0)",
                  borderWidth: 5,
                  borderStyle: "inset",
                  borderTopWidth: 0,
                  borderRightWidth: 5,
                  borderBottomWidth: 5,
                  borderLeftWidth: 0,
                  marginRight: "-14px",
                  width: 652
                }}
              >
                <form
                  style={{
                    paddingTop: 0,
                    marginTop: 44,
                    marginLeft: 18,
                    marginBottom: 418,
                    marginRight: 14
                  }}
                >
                  <label
                    className="form-label"
                    style={{
                      textAlign: "center",
                      paddingTop: 0,
                      marginBottom: 6,
                      marginTop: "-44px",
                      paddingLeft: 0,
                      paddingRight: 0,
                      marginRight: 3,
                      paddingBottom: 0,
                      marginLeft: 31,
                      fontFamily: '"Arial Regular"',
                      color: "#212529",
                      fontSize: 20
                    }}
                  >
                    <br />
                    Vous êtes un professionnel de beauté ?<br />
                    Un de nos experts vous contactera. Remplissez correctement le
                    formulaire
                    <br />
                    <br />
                  </label>
                  <label
                    className="form-label"
                    style={{
                      paddingBottom: 0,
                      marginTop: 11,
                      fontFamily: '"Arial Regular"'
                    }}
                  >
                    Noms et prénoms
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    data-bss-hover-animate="pulse"
                    style={{
                      marginRight: "-4px",
                      paddingRight: 5,
                      paddingLeft: 6,
                      height: 38,
                      width: 565,
                      marginLeft: 1
                    }}
                  />
                  <div className="row">
                    <div className="col-xxl-6" style={{ width: "auto" }}>
                      <label
                        className="form-label"
                        style={{
                          marginTop: 17,
                          fontFamily: '"Arial Regular"',
                          marginRight: 6,
                          marginLeft: 3
                        }}
                      >
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        style={{ width: 250, marginRight: 3 }}
                        required=""
                      />
                    </div>
                    <div
                      className="col"
                      data-bss-hover-animate="pulse"
                      style={{ marginLeft: 37 }}
                    >
                      <label
                        className="form-label"
                        style={{
                          fontFamily: '"Arial Regular"',
                          marginBottom: 3,
                          marginLeft: 7,
                          marginTop: 22,
                          marginRight: 11
                        }}
                      >
                        Téléphone
                      </label>
                      <code>
                        <link
                          rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css"
                        />
                        <div className="input-group">
                          <input type="tel" id="phone" className="form-control" />
                        </div>
                        {/* Include jQuery (Required) */}
                        {/* Include intlTelInput JS */}
                        {/* Include intlTelInput utils JS */}
                      </code>
                    </div>
                  </div>
                  <label
                    className="form-label"
                    style={{
                      marginTop: 17,
                      fontFamily: '"Arial Regular"',
                      marginLeft: 1
                    }}
                  >
                    Adresse
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    data-bss-hover-animate="pulse"
                    style={{ width: 250, marginRight: 3 }}
                  />
                  <label
                    className="form-label"
                    style={{
                      fontFamily: '"Arial Regular"',
                      marginRight: 300,
                      marginTop: 23
                    }}
                  >
                    Spécialités&nbsp;
                  </label>
                  <div>
                    <select id="specialites" name="specialites">
                      <option value="coiffeur">Coiffeurs/Coiffeuses</option>
                      <option value="estheticien">Esthéticiens/Esthéticiennes</option>
                      <option value="maquilleur">Maquilleurs/Maquilleuses</option>
                      <option value="extension_cils">
                        Spécialistes en extension de cils
                      </option>
                      <option value="barbier">Barbiers</option>
                      <option value="tatoueur">Tatoueurs/Tatoueuses</option>
                      <option value="piercer">Piercers</option>
                      <option value="styliste">Stylistes</option>
                      <option value="massotherapeute">Massothérapeutes</option>
                      <option value="nutritionniste">Nutritionnistes</option>
                      <option value="chirurgien_esthetique">
                        Chirurgiens esthétiques
                      </option>
                      <option value="epilation_laser">
                        Spécialistes en épilation au laser
                      </option>
                      <option value="soins_ongles">
                        Spécialistes en soins des ongles
                      </option>
                    </select>
                    <i
                      className="fas fa-plus-circle"
                      style={{ fontSize: 31, marginLeft: 20 }}
                    />
                  </div>
                  <label
                    className="form-label"
                    style={{
                      marginTop: 22,
                      marginBottom: 14,
                      fontFamily: '"Arial Regular"'
                    }}
                  >
                    Horaires :
                  </label>
                  <div>
                    <label htmlFor="heures">Choisissez une heure d'ouverture :</label>
                    <select id="heures" name="heures">
                      <option value={7}>7h00</option>
                      <option value={8}>8h00</option>
                      <option value={9}>9h00</option>
                      <option value={10}>10h00</option>
                      <option value={11}>11h00</option>
                      <option value={12}>12h00</option>
                      <option value={13}>13h00</option>
                      <option value={14}>14h00</option>
                      <option value={15}>15h00</option>
                      <option value={16}>16h00</option>
                      <option value={17}>17h00</option>
                    </select>
                  </div>
                  <br />
                  <div>
                    <label htmlFor="heures">
                      Choisissez une heure de Fermeture :
                    </label>
                    <select id="heures" name="heures">
                      <option value={8}>8h00</option>
                      <option value={9}>9h00</option>
                      <option value={10}>10h00</option>
                      <option value={11}>11h00</option>
                      <option value={12}>12h00</option>
                      <option value={13}>13h00</option>
                      <option value={14}>14h00</option>
                      <option value={15}>15h00</option>
                      <option value={16}>16h00</option>
                      <option value={17}>17h00</option>
                      <option value={18}>18h00</option>
                      <option value={19}>19h00</option>
                      <option value={20}>20h00</option>
                      <option value={21}>21h00</option>
                      <option value={22}>22h00</option>
                    </select>
                  </div>
                  <br />
                  <button
                    className="btn btn-primary"
                    data-bss-hover-animate="pulse"
                    type="button"
                    style={{
                      marginTop: 40,
                      width: 463,
                      height: 65,
                      fontSize: 24,
                      textAlign: "center",
                      fontWeight: "bold",
                      background: "#fc8d8d",
                      borderColor: "rgba(255,255,255,0)",
                      borderRadius: 15,
                      marginRight: 0,
                      marginLeft: 72
                    }}
                  >
                    S'enregistrer
                  </button>
                </form>
              </div>
              <div
                className="col-md-6"
                style={{
                  background: "rgba(249,244,244,0)",
                  paddingTop: 30,
                  marginTop: 40,
                  height: 874,
                  marginBottom: 36,
                  marginLeft: "-10px"
                }}
              >
                <div
                  style={{ marginTop: "-222px", paddingRight: 70, marginLeft: 74 }}
                >
                  <h1
                    style={{
                      fontFamily: '"Arial Regular"',
                      fontWeight: "bold",
                      marginTop: 170,
                      fontSize: 64,
                      width: "auto",
                      marginLeft: 4,
                      marginRight: "-80px",
                      paddingRight: 332,
                      height: "auto"
                    }}
                  >
                    Vous en
                    <br />
                    avez&nbsp;rêvé.
                  </h1>
                  <span
                    style={{
                      fontSize: 20,
                      fontFamily: '"Arial Regular"',
                      fontWeight: "bold"
                    }}
                  >
                    <br />
                    Libérez vos journées et développez votre business <br />
                    avec notre plateforme de réservation beauté.
                    <br />
                    <br />
                  </span>
                  <div className="row">
                    <div className="col">
                      <i
                        className="far fa-check-circle"
                        style={{ fontSize: 20, color: "#5de26b" }}
                      />
                      <span style={{ marginLeft: 9, fontWeight: "bold" }}>
                        Plus de 10k utilisateur / mois
                      </span>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 8 }}>
                    <div className="col">
                      <i
                        className="far fa-check-circle"
                        style={{ fontSize: 20, color: "#5de26b" }}
                      />
                      <span style={{ marginLeft: 9, fontWeight: "bold" }}>
                        Sans engagement
                      </span>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 8 }}>
                    <div className="col">
                      <i
                        className="far fa-check-circle"
                        style={{ fontSize: 20, color: "#5de26b" }}
                      />
                      <span style={{ marginLeft: 9, fontWeight: "bold" }}>
                        Sans commission
                      </span>
                    </div>
                  </div>
                  <img
                    src="assets/img/clipboard-image-1.png"
                    style={{ transform: "translate(441px) rotate(-160deg)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProRegistration;