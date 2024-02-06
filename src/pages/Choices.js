import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../assets1/choice.css"

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
    <div className="ask">
      <p style={{fontSize: 70, fontWeight: 800}}>Vous êtes ?</p>
      <div className="pro-inst">
        <p  onClick={onPro} style={{cursor:"pointer", fontSize: 40, fontWeight: 200}}>Un Professionel</p>
        <p onClick={onInstitute} style={{cursor:"pointer", fontSize: 40, fontWeight: 200}}> Une institut</p>
      </div>
    </div>
    </>
  );
};

export default Choice;