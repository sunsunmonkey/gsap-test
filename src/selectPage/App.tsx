import { useState } from "react";
import ChangePage from "./ChangePage";
import Page from "./Page";
import "./index.css";

function App() {
  const [select, setSelect] = useState<number>(0);

  return (
    <>
      <ChangePage select={select} setSelect={setSelect}></ChangePage>
      <h1>111</h1>
      <Page
        content="first"
        color="red"
        id="first"
        index={0}
        setSelect={setSelect}
      ></Page>
      <Page
        content="second"
        color="blue"
        id="second"
        index={1}
        setSelect={setSelect}
      ></Page>
      <Page
        content="third"
        color="#00bcd4"
        id="third"
        index={2}
        setSelect={setSelect}
      ></Page>
      <Page
        content="fourth"
        color="rgb(68 72 30)"
        id="fourth"
        index={3}
        setSelect={setSelect}
      ></Page>
    </>
  );
}

export default App;
