import { useState } from "react";
import ChangePage from "./ChangePage";
import Page from "./Page";
import "./index.css";

function App() {
  const [select, setSelect] = useState<number>(0);


  return (
    <>
      <ChangePage select={select} setSelect={setSelect}></ChangePage>
      <Page content="first" color="red" id="first"></Page>
      <Page content="second" color="blue" id="second"></Page>
      <Page content="third" color="#00bcd4" id="third"></Page>
    </>
  );
}

export default App;
