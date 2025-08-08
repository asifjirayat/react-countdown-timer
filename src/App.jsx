import { useRef, useState } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import Timer from "./components/Timer.jsx";

export default function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef(null);

  //Function to handle event for input component
  function handleSetTime(value) {
    const seconds = Math.max(0, Number(value));
    setTotalSeconds(seconds);
  }

  //Function to handle event for start button component
  function handleStart() {
    if (totalSeconds > 0 && !isRunning) {
      setisRunning(true);
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setisRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }

  //Function to handle event for stop button component
  function handleStop() {
    clearInterval(intervalRef.current);
    setisRunning(false);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-2 w-full h-4/6 mx-auto max-w-xs py-10">
        <Timer totalSeconds={totalSeconds} />
        <Input
          onChange={handleSetTime}
          label="Enter a value for the timer (seconds):"
          id="timer"
        />
        <Button onClick={handleStart}>Start Timer</Button>
        <Button onClick={handleStop} stop={true}>
          Stop Timer
        </Button>
      </main>
      <Footer />
    </>
  );
}
