import { useState } from "react";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import Timer from "./components/Timer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-2 w-full h-4/6 mx-auto max-w-xs py-10">
        <Timer />
        <Input label="Enter a value for the timer (seconds):" id="timer" />

        <Button>Start Timer</Button>
        <Button stop={true}>Stop Timer</Button>
      </main>
      <Footer />
    </>
  );
}
