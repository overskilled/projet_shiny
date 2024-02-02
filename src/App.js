import { useEffect } from "react";
import {
  Routes,
  Route,
  // useNavigationType,
  // useLocation,
  BrowserRouter
} from "react-router-dom";
import Acceuil from "./pages/Acceuil";
// import PaiementOthers from "./pages/PaiementOthers";
import Payment from "./pages/Payment";
import IdentificationReussi from "./pages/IdentificationReussi";
import Identification from "./pages/Identification";
// import ConfigurationDuPaiementAvec from "./pages/ConfigurationDuPaiementAvec";
import ConfigurationDuPaiement from "./pages/ConfigurationDuPaiement";
import ChoixService from "./pages/ChoixService";
import CustomerLogin from "./pages/CustomerLogin";
import ReservationService from "./pages/ReservationService";
import ProRegistration from "./pages/ProRegistration";
// import RservationServicesV2 from "./pages/RservationServicesV2";
import InstituteRegistration from "./pages/InstitueRegistration";
import Card from "./pages/Card";
import CustomerSignUp from "./pages/CustomerSignUp";
import Choice from "./pages/Choices"; 

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "SHINY | ACCUEIL";
  //       metaDescription = "";
  //       break;
  //     case "/paiement-others":
  //       title = "ADD A PAYMENT METHOD";
  //       metaDescription = "";
  //       break;
  //     case "/paiement":
  //       title = "SHINY | PAYMENT";
  //       metaDescription = "";
  //       break;
  //     case "/identification-reussie":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/identification":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/configuration-du-paiement-avec-ajout-de-prestation":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/configuration-du-paiement":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/-service-choisi":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/login":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/rservation-services":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/professionel-login":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/rservation-services-v2":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/institute-login":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/professinel-choice":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Acceuil />} />
          {/* <Route path="/paiement-others" element={<PaiementOthers />} /> */}
          <Route path="/paiement" element={<Payment />} />
          <Route path="/identification-reussi" element={<IdentificationReussi />} />
          <Route path="/identification" element={<Identification />} />
          {/* <Route path="/configuration-du-paiement-avec-ajout-de-prestation" element={<ConfigurationDuPaiementAvec />} /> */}
          <Route path="/configuration-du-paiement" element={<ConfigurationDuPaiement />} />
          <Route path="/choix-service" element={<ChoixService />} />
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/reservation-services" element={<ReservationService />} />
          <Route path="/professional-Registration" element={<ProRegistration />} />
          {/* <Route path="/rservation-services-v2" element={<RservationServicesV2 />}/> */}
          <Route path="/institute-Registration" element={<InstituteRegistration />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/customer-registration" element={<CustomerSignUp />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;