import React, { useContext } from "react";
import { MainDataContext } from "../../../data/MainDataContext";
function NewsList() {
  const state = useContext(MainDataContext).news;
  console.log("state", state);
  return <div>news list </div>;
}

export default NewsList;
