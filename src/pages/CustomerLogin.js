import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./css/CustomerLogin.module.css";

const CustomerLogin = () => {
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
    <div
  id="container"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    height: "100vh"
  }}
>
  <div
    id="col1"
    className="column"
    style={{ backgroundColor: "pink", gridColumn: "span 2" }}
  >
    <img
      src="assets/img/Vector.svg"
      style={{
        marginLeft: "55%",
        position: "relative",
        display: "block",
        width: "40%",
        height: "200.9px"
      }}
    />
    <img
      src="assets/img/Vector(1).svg"
      style={{ width: "45%", height: "43%", marginTop: "10%" }}
    />
  </div>
  <div
    id="col2"
    className="column"
    style={{ gridColumn: "span 3", textAlign: "center", padding: "10px 20px" }}
  >
    <p style={{ fontFamily: "Arial" }}>
      <strong>Vous avez déjà utilisez </strong>
      <span style={{ color: "rgb(252, 141, 141)" }}>Shiny</span>
      <strong>?</strong>
    </p>
    <form
      style={{
        width: "80%",
        textAlign: "center",
        marginLeft: "10%",
        marginRight: "10%"
      }}
    >
      <p style={{ fontFamily: "Arial", textAlign: "left", fontWeight: "bold" }}>
        Email*
      </p>
      <input
        className="form-control"
        type="email"
        style={{ borderRadius: "5px 5px 5px 5px" }}
      />
      <p style={{ fontFamily: "Arial", textAlign: "left", fontWeight: "bold" }}>
        Mot de passe *
      </p>
      <input
        className="form-control"
        type="password"
        style={{ borderRadius: "10px 10px 10px 10px" }}
      />
      <p style={{ fontFamily: "Arial", textAlign: "left" }}>
        <span style={{ color: "rgba(33, 37, 41, 0.72)", fontWeight: "bold" }}>
          Mot de passe oublie?
        </span>
      </p>
      <input
        className="btn btn-primary"
        type="submit"
        defaultValue="se connecter"
        style={{ width: "100%", background: "#fc8d8d" }}
      />
    </form>
    <div
      style={{
        width: "80%",
        height: "3%",
        marginRight: "10%",
        marginLeft: "10%"
      }}
    >
      <div
        style={{
          width: "95%",
          height: 1,
          background: "#000000",
          marginTop: "10%",
          marginLeft: "4%"
        }}
      />
    </div>
    <div style={{ width: "80%", marginRight: "10%", marginLeft: "10%" }}>
      <p style={{ fontFamily: "Arial" }}>Créer un compte</p>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          width: "100%",
          marginTop: 10,
          color: "rgb(255,255,255)",
          background: "var(--bs-light)",
          textAlign: "center"
        }}
        value="se connecter avec google"
      >
        <img
          style={{ width: 20, height: 20 }}
          width={20}
          height={20}
          src="assets/img/google(1).png"
        />
        <span style={{ color: "rgb(0, 0, 0)" }}>Se connecter avec google</span>
      </button>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          width: "100%",
          marginTop: 10,
          background: "var(--bs-btn-disabled-color)"
        }}
        value="ok"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="bi bi-apple"
          style={{ width: 20, height: 20, color: "rgb(0,0,0)" }}
        >
          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
        </svg>
        <span style={{ color: "rgb(0, 0, 0)" }}>Se connecter avec apple</span>
      </button>
      <button
        className="btn btn-primary"
        type="button"
        style={{
          width: "100%",
          marginTop: 10,
          background: "var(--bs-btn-disabled-color)"
        }}
      >
        <span style={{ color: "rgb(0, 0, 0)" }}>
          <img
            style={{ width: 20, height: 20, marginRight: 0, marginLeft: 16 }}
            src="assets/img/facebook.png"
          />
          Se connecter avec facebook
        </span>
      </button>
    </div>
  </div>
</div>

  );
};

export default CustomerLogin;