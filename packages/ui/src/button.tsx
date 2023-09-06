"use client";
export function Button(): JSX.Element {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={(): void => {
        console.log("Boopa");
      }}
      type="button"
    >
      Boopa
    </button>
  );
}
