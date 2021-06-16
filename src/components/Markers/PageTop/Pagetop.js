import { useLayoutEffect } from "react";
// use effect runs after render so the scroll  will trigger page animations
function Pagetop() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return null;
}

export default Pagetop;
