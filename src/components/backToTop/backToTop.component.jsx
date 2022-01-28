import React, { useState, useEffect } from "react";
import "./backToTop.style.css";

const BackToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <i
          onClick={scrollToTop}
          className="bi bi-arrow-up-square-fill back-to-top"
        ></i>
      )}
    </>
  );
};

export default BackToTop;
