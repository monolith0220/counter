import React, { useState } from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const onClickButton = () => alert();
  const [num, setNum] = useState(0);
  return (
    <>
      <ColorMessage color="blue" message="カウンター" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
