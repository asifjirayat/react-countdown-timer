import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, id, onChange, value, disabled },
  ref
) {
  return (
    <>
      <label htmlFor={id} className="text-lg font-medium text-stone-700">
        {label}
      </label>
      <input
        onChange={(event) => onChange(event.target.value)}
        id={id}
        value={value}
        disabled={disabled}
        type="number"
        min="0"
        className="w-full rounded-md border border-stone-300 px-3 py-2 text-stone-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
      />
    </>
  );
});

export default Input;
