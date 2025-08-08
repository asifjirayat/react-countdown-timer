export default function Header() {
  return (
    <header className="w-full h-1/6 bg-blue-50 py-6">
      <h1 className="text-6xl font-bold text-stone-700 text-center my-6">
        React Countdown Timer
      </h1>
      <p className="text-2xl text-stone-500 font-light text-center my-3">
        This project uses React hooks: useState, useRef, forwardRef,
        useImperativeHandle, and createPortal
      </p>
    </header>
  );
}
