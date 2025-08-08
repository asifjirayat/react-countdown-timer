export default function Input({ label, id }) {
  return (
    <>
      <label htmlFor={id} className="text-lg font-medium text-stone-700">
        {label}
      </label>
      <input
        id={id}
        type="number"
        className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
      />
    </>
  );
}
