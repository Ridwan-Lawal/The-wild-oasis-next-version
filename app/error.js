"use client";

function Error({ error, reset }) {
  return (
    <div>
      <h2 className="text-2xl text-color-brand font-semibold">
        {error.message}
      </h2>
      <button
        onClick={reset}
        className="py-2.5 px-7 bg-color-brand text-white font-medium"
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
