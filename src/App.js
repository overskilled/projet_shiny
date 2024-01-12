import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import PaiementOthers from "./pages/PaiementOthers";
import Paiement from "./pages/Paiement";
import IdentificationRussie from "./pages/IdentificationRussie";
import Identification from "./pages/Identification";
import ConfigurationDuPaiementAvec from "./pages/ConfigurationDuPaiementAvec";
import ConfigurationDuPaiement from "./pages/ConfigurationDuPaiement";
import ServiceChoisi from "./pages/ServiceChoisi";
import CustpmerLogin from "./pages/CustomerLogin";
import RservationServices from "./pages/RservationServices";
import ProfessionelLogin from "./pages/ProfessionelLogin";
import RservationServicesV2 from "./pages/RservationServicesV2";
import InstituteLogin from "./pages/InstituteLogin";
import ProfessinelChoice from "./pages/ProfessinelChoice";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "SHINY | ACCUEIL";
        metaDescription = "";
        break;
      case "/paiement-others":
        title = "ADD A PAYMENT METHOD";
        metaDescription = "";
        break;
      case "/paiement":
        title = "SHINY | PAYMENT";
        metaDescription = "";
        break;
      case "/identification-reussie":
        title = "";
        metaDescription = "";
        break;
      case "/identification":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-du-paiement-avec-ajout-de-prestation":
        title = "";
        metaDescription = "";
        break;
      case "/configuration-du-paiement":
        title = "";
        metaDescription = "";
        break;
      case "/-service-choisi":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/rservation-services":
        title = "";
        metaDescription = "";
        break;
      case "/professionel-login":
        title = "";
        metaDescription = "";
        break;
      case "/rservation-services-v2":
        title = "";
        metaDescription = "";
        break;
      case "/institute-login":
        title = "";
        metaDescription = "";
        break;
      case "/professinel-choice":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/paiement-others" element={<PaiementOthers />} />
      <Route path="/paiement" element={<Paiement />} />
      <Route path="/identification-russie" element={<IdentificationRussie />} />
      <Route path="/identification" element={<Identification />} />
      <Route path="/configuration-du-paiement-avec-ajout-de-prestation" element={<ConfigurationDuPaiementAvec />} />
      <Rout path="/configuration-du-paiement" element={<ConfigurationDuPaiement />} />
      <Route path="/-service-choisi" element={<ServiceChoisi />} />
      <Route path="/login" element={<CustomerLogin />} />
      <Route path="/rservation-services" element={<RservationServices />} />
      <Route path="/professionel-login" element={<ProfessionelLogin />} />
      <Route path="/rservation-services-v2" element={<RservationServicesV2 />}/>
      <Route path="/institute-login" element={<InstituteLogin />} />
      <Route path="/professinel-choice" element={<ProfessinelChoice />} />
    </Routes>
  );
}
export default App;
