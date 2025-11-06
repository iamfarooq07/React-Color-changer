function Color({ onClick }) {
  const colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "gray",
    "purple",
    "pink",
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 px-3 rounded-full bg-black py-3">
      {colors.map((clr) => (
        <button
          key={clr}
          onClick={() => onClick(clr)}
          className={`bg-${clr}-500 px-3 py-2 text-white rounded-2xl`}
        >
          {clr}
        </button>
      ))}
    </div>
  );
}

export default Color;
