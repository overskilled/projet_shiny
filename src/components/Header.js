import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const on = useCallback(() => {
    navigate("/rservation-services");
  }, [navigate]);

//   const onBoutonConnexionContainerClick = useCallback(() => {
//     navigate("/desktop-10");
//   }, [navigate]);

//   const onBoutonAjouterTablissementClick = useCallback(() => {
//     navigate("/professinel-choice");
//   }, [navigate]);

//   const onButtonContainer1Click = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

//   const onButtonContainer2Click = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

//   const onBoutonSearchIconClick = useCallback(() => {
//     navigate("/rservation-services");
//   }, [navigate]);

  return (
    <>
        <div
        className="container d-flex justify-content-around align-items-xxl-center"
        style={{
        background: "var(--bs-success)",
        width: "initial",
        maxWidth: "100%",
        height: 100,
        paddingTop: 25
        }}
    >
        <img
        onClick={() => navigate("/")}
        src="assets/img/Shiny%20Logo.png"
        style={{ width: 100, minWidth: 41, height: 50, cursor:"pointer"}}
        />
        <div
        className="d-flex justify-content-between"
        style={{
            fontSize: 15,
            fontFamily: "arial",
            fontWeight: "bold",
            paddingTop: 11,
            width: 600
        }}
        >
        <p onClick={() => navigate("/reservation-services")} style={{cursor: "pointer"}}>Coiffeur</p>
        <p onClick={() => navigate("/reservation-services")} style={{cursor: "pointer"}}>Barbier</p>
        <p onClick={() => navigate("/reservation-services")} style={{cursor: "pointer"}}>Nos Services</p>
        <p onClick={() => navigate("/reservation-services")} style={{cursor: "pointer"}}>Institut de beauté</p>
        <p onClick={() => navigate("/reservation-services")} style={{cursor: "pointer"}}>Institut de massage</p>
        </div>
        <div className="d-flex justify-content-between" style={{ width: 450 }}>
        <button
            onClick={() => navigate("/choice")}
            className="btn btn-primary"
            type="button"
            style={{
            background: "var(--bs-secondary)",
            borderColor: "var(--bs-secondary)",
            borderRadius: 40,
            fontFamily: "arial",
            fontSize: 15,
            fontWeight: "bold",
            color: "rgb(255,255,255)",
            width: 251,
            height: 48
            }}
        >
            Ajouter un établissement
        </button>
        <button
            onClick={() => navigate("/login")}
            className="btn btn-primary"
            type="button"
            style={{
            background: "var(--bs-secondary)",
            borderColor: "var(--bs-secondary)",
            borderRadius: 40,
            fontSize: 15,
            fontFamily: "arial",
            color: "rgb(255,255,255)",
            fontWeight: "bold",
            height: 48,
            width: 174
            }}
        >
            <img src="assets/img/material-symbols_person.png" />
            Connexion
        </button>
        </div>
    </div>
  </>
  );
};

export default Header;