import { useState } from "react";
import Results from "./components/Results/Results";
import Summary from "./components/Summary/Summary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="result-summary">
          <Results />
          <Summary />
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Frank Obedi</a>.
        </div>
      </main>
    </>
  );
}

export default App;
