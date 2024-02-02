import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Identification = () => {
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

  const onLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUp = useCallback(() => {
    navigate("/customer-registration");
  }, [navigate]);

  const onModifier = useCallback(() => {
    navigate("/configuration-du-paiement");
  }, [navigate]);

  const onSup = useCallback(() => {
    navigate("/choix-service");
  }, [navigate]);

  return (
    <>
    <Header />
    <div className="container" style={{ padding: "5% 10%" }}>
  <h5>Shinny Coiffure</h5>
  <div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <i className="fa fa-map-marker" style={{ marginLeft: 5 }} />
      <p style={{ margin: 0, marginLeft: 5 }}>
        <strong>Douala</strong>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="bi bi-dot"
        style={{ marginLeft: 5 }}
      >
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
      <i className="fa fa-star" style={{ marginLeft: 5 }} />
      <p style={{ margin: 0, marginLeft: 5 }}>4.0 ( 1000 amis)</p>
    </div>
    <div style={{ marginTop: 25 }}>
      <h4>1. Prestation Sélectionnée</h4>
      <div
        className="row"
        style={{
          outline: "solid 1px grey",
          borderRadius: 10,
          padding: 20,
          boxShadow: "grey 0px 10px 10px -10px",
          margin: 0
        }}
      >
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
            justifyContent: "center"
          }}
        >
          <p style={{ margin: 0 }}>Coupe Garcon - 14 ans</p>
          <p style={{ margin: 0 }}>30 min - 8000 XAF</p>
        </div>
        <div className="col" style={{ display: "flex", justifyContent: "end" }}>
          <button
            onClick={onSup}
            className="btn btn-primary"
            type="button"
            style={{ background: "none", border: "none", color: "blue" }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 25 }}>
      <h4>2.&nbsp;Date et l’Heure Sélectionnées</h4>
      <div
        className="row"
        style={{
          outline: "solid 1px grey",
          borderRadius: 10,
          padding: 20,
          boxShadow: "grey 0px 10px 10px -10px",
          margin: 0
        }}
      >
        <div
          className="col"
          style={{ display: "flex", alignItems: "center", padding: 0 }}
        >
          <p style={{ fontWeight: "bold", margin: 0 }}>Vendredi 12 Janvier</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-dot"
            style={{
              height: "100%",
              paddingTop: "3%",
              color: "var(--bs-gray-500)"
            }}
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
          <p style={{ margin: 0 }}>à 11 : 00</p>
        </div>
        <div className="col" style={{ display: "flex", justifyContent: "end" }}>
          <button
            onClick={onModifier}
            className="btn btn-primary"
            type="button"
            style={{ background: "none", border: "none", color: "blue" }}
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 25 }}>
      <h4>3. Identification</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          outline: "solid 1px grey",
          borderRadius: 10,
          boxShadow: "grey 0px 10px 10px -10px",
          width: "100%",
          padding: 20
        }}
      >
        <h1>Je suis Nouveau sur Shiny?</h1>
        <button
          onClick={onSignUp}
          className="btn btn-primary"
          type="button"
          style={{
            background: "var(--bs-btn-disabled-color)",
            color: "var(--bs-black)",
            borderColor: "var(--bs-gray-dark)",
            borderRadius: 10,
            padding: 10,
            boxShadow: "grey 0px 10px 10px -10px",
            width: "80%",
            margin: "20px 0px"
          }}
        >
          Créer mon compte
        </button>
        <p
          className="bloc"
          style={{ overflow: "hidden", textAlign: "center", width: "100%" }}
        >
          Ou
        </p>
        <h1>J'ai déjà utilisé Shiny?</h1>
        <button
          onClick={onLogin}
          className="btn btn-primary"
          type="button"
          style={{
            background: "var(--bs-gray-dark)",
            outline: "solid 1px grey",
            borderRadius: 10,
            padding: 10,
            boxShadow: "grey 0px 10px 10px -10px",
            width: "80%",
            margin: "20px 0px"
          }}
        >
          Se Connecter
        </button>
      </div>
    </div>
  </div>
</div>
<Footer />
</>
  );
};

export default Identification;