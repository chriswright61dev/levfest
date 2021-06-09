import React, { useEffect } from "react";

function Pagetop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return null;
}

export default Pagetop;
