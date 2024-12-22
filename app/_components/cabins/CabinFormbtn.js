function CabinFormbtn({ isPending, children }) {
  return (
    <button
      disabled={isPending}
      type="submit"
      className={`btn positive ${
        isPending ? "opacity-80 cursor-not-allowed" : "opacity-100"
      } `}
    >
      {children}
    </button>
  );
}

export default CabinFormbtn;

// create and add server action for updating the form
