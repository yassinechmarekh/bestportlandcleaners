import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div
          onClick={handleToTop}
          className={
            "fixed bottom-4 right-4 p-2 sm:p-3 bg-steel-blue hover:bg-sky-900 transition-colors ease-in-out text-white rounded-full cursor-pointer animate-bounce z-40"
          }
        >
          <IoIosArrowUp size={28} />
        </div>
      )}
    </>
  );
}
