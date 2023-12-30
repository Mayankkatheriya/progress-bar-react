import { useEffect, useState } from "react";
import "./App.css";
import Progressbar from "./Progressbar";
import LandingPage from "./LandingPage";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  const handleReset = () => {
    setValue(0);
    setSuccess(false);
  };

  return (
    <>
      {success ? (
        <LandingPage onClick={() => handleReset()} />
      ) : (
        <Progressbar value={value} onComplete={() => setSuccess(true)} />
      )}
    </>
  );
}

export default App;
