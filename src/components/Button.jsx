export default function Button({ stop = false, children, ...props }) {
  let buttonClasses =
    "w-full px-6 py-2 text-white rounded-md shadow-md focus:outline-none focus:ring active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed ";

  buttonClasses += stop
    ? "bg-red-600 hover:bg-red-700 focus:ring-red-300"
    : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300";

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
