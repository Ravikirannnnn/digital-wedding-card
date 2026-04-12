import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import "./GiftWrapper.css";

const GiftWrapper = ({ onUnwrap,startMusic }) => {
  const [step, setStep] = useState("closed"); // closed | ribbonOpen | boxSplit | done
  const [showConfetti, setShowConfetti] = useState(false);
  const timeoutRef = useRef(null);

  const handleOpen = () => {
    if (step === "closed") {
      setStep("ribbonOpen");

      timeoutRef.current = setTimeout(() => {
        setStep("boxSplit");
        setShowConfetti(true);

        if (startMusic) startMusic(); 

        setTimeout(() => {
          setShowConfetti(false);
          setStep("done");
          onUnwrap();
        }, 3000);
      }, 1300);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="gift-wrapper-container">
      {showConfetti && <Confetti />}
      {step !== "done" && (
        <div className="gift-content">
          <div className="gift-heading">Open your invitation</div>
          <div className={`gift-box-wrapper ${step}`} onClick={handleOpen}>
            <div className="gift-half left"></div>
            <div className="gift-half right"></div>
            <div className={`ribbon-horizontal ${step}`}></div>
            <div className={`ribbon-vertical ${step}`}></div>
            <div className={`ribbon-bow ${step}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftWrapper;
